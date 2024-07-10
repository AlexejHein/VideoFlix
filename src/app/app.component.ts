import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {DataRowOutlet} from "@angular/cdk/table";
import {MatIcon} from "@angular/material/icon";
import { RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    DataRowOutlet,
    RouterLink,
    MatIcon,
    RouterModule,
    VideoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VideoFlix';

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        // Nach erfolgreichem Logout den Benutzer zur Login-Seite umleiten
        this.router.navigate(['/login']).then(r => {});
      },
      error: (error) => {
        // Fehlerbehandlung, falls nötig
        console.error('Logout failed', error);
      }
    });
  }
}
