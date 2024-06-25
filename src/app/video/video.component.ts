import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    NgOptimizedImage,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  video: {title: string, year: number, description: string} = {
    title: 'Video Title 1',
    year: 2024,
    description: 'Description 1'
  };

}
