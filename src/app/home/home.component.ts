import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {VideoComponent} from "../video/video.component";
import {FooterComponent} from "../footer/footer.component";
import {VideoService} from "../services/video.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    VideoComponent,
    FooterComponent,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private videoService: VideoService) { }

}
