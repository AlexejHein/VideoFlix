import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {DataRowOutlet} from "@angular/cdk/table";
import {MatIcon} from "@angular/material/icon";
import { RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { AuthService} from "./services/auth.service";
import {NgIf} from "@angular/common";

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
    VideoComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'VideoFlix';
  isUserLoggedIn = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then(() => {
      this.isUserLoggedIn = false;
    });
  }


}
