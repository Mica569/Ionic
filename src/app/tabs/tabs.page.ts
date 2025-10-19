import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonicModule, RouterOutlet, RouterLink],
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {}

