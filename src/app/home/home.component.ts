import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {VideoComponent} from "../video/video.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    VideoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
