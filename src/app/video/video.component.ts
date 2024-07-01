import { Component, OnInit } from '@angular/core';
import { VideoService, Video } from '../services/video.service';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {DatePipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule} from "ngx-videogular2";

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgForOf,
    NgOptimizedImage,
    VgCoreModule,
    VgOverlayPlayModule,
    VgControlsModule,
    VgBufferingModule,
    DatePipe,
    NgIf
  ],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videos: Video[] = [];
  currentIndex = 0;
  visibleCount = 3;
  selectedVideoUrl: string | null = null;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(data => {
      this.videos = data;
    });
  }

  getVisibleVideos() {
    const visibleVideos = [];
    for (let i = 0; i < this.visibleCount; i++) {
      if (this.videos.length > 0) {
        visibleVideos.push(this.videos[(this.currentIndex + i) % this.videos.length]);
      }
    }
    return visibleVideos;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
  }

  playVideo(video: Video, event: Event) {
    event.stopPropagation();
    this.selectedVideoUrl = video.file_url;
  }

  closePlayer() {
    this.selectedVideoUrl = null;
  }
}
