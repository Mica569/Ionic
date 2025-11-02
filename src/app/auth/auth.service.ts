import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type User = {
  username: string;
  passwordHash: string; // SHA-256 hex
  createdAt: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private static USERS_KEY = 'app_users_v1';
  private static SESSION_KEY = 'app_session_user_v1';

  private users: User[] = [];
  currentUser$ = new BehaviorSubject<User | null>(null);

  constructor() {
    this.load();
  }

  private load() {
    try {
      const raw = localStorage.getItem(AuthService.USERS_KEY);
      this.users = raw ? (JSON.parse(raw) as User[]) : [];
      const session = localStorage.getItem(AuthService.SESSION_KEY);
      this.currentUser$.next(session ? this.users.find(u => u.username === session) ?? null : null);
    } catch {
      this.users = [];
      this.currentUser$.next(null);
    }
  }

  private persist() {
    localStorage.setItem(AuthService.USERS_KEY, JSON.stringify(this.users));
  }

  async register(username: string, password: string): Promise<{ ok: true } | { ok: false; error: string }> {
    username = (username || '').trim();
    if (!username || !password) return { ok: false, error: 'Usuario y contraseña son requeridos' };
    if (this.users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
      return { ok: false, error: 'El usuario ya existe' };
    }
    const passwordHash = await this.hash(password);
    const user: User = { username, passwordHash, createdAt: new Date().toISOString() };
    this.users.push(user);
    this.persist();
    this.setSession(user);
    return { ok: true };
  }

  async login(username: string, password: string): Promise<{ ok: true } | { ok: false; error: string }> {
    const user = this.users.find(u => u.username.toLowerCase() === (username || '').trim().toLowerCase());
    if (!user) return { ok: false, error: 'Usuario o contraseña inválidos' };
    const hash = await this.hash(password || '');
    if (hash !== user.passwordHash) return { ok: false, error: 'Usuario o contraseña inválidos' };
    this.setSession(user);
    return { ok: true };
  }

  logout() {
    localStorage.removeItem(AuthService.SESSION_KEY);
    this.currentUser$.next(null);
  }

  private setSession(user: User) {
    localStorage.setItem(AuthService.SESSION_KEY, user.username);
    this.currentUser$.next(user);
  }

  private async hash(value: string): Promise<string> {
    const enc = new TextEncoder().encode(value);
    const buf = await crypto.subtle.digest('SHA-256', enc);
    const arr = Array.from(new Uint8Array(buf));
    return arr.map(b => b.toString(16).padStart(2, '0')).join('');
  }
}

