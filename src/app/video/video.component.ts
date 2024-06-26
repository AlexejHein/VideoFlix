import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgOptimizedImage } from "@angular/common";




@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgForOf,
    NgOptimizedImage,
  ],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  videos = [
    {title: 'Video Title 1', year: 2024, description: 'Description 1'},
    {title: 'Video Title 2', year: 2025, description: 'Description 2'},
    {title: 'Video Title 3', year: 2026, description: 'Description 3'},
    {title: 'Video Title 4', year: 2027, description: 'Description 4'},
    {title: 'Video Title 5', year: 2028, description: 'Description 5'},
    {title: 'Video Title 6', year: 2029, description: 'Description 6'},
    {title: 'Video Title 7', year: 2030, description: 'Description 7'},
    {title: 'Video Title 8', year: 2031, description: 'Description 8'}
  ];


  currentIndex = 0;
  visibleCount = 3;

  getVisibleVideos() {
    const visibleVideos = [];
    for (let i = 0; i < this.visibleCount; i++) {
      visibleVideos.push(this.videos[(this.currentIndex + i) % this.videos.length]);
    }
    return visibleVideos;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
  }
}

