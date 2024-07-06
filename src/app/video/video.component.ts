import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { VideoService, Video } from '../services/video.service';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DatePipe, NgForOf, NgIf, NgOptimizedImage } from "@angular/common";
import videojs from 'video.js';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgForOf,
    NgOptimizedImage,
    DatePipe,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [VideoService]
})
export class VideoComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef;
  player!: any;
  videos: Video[] = [];
  currentIndex = 0;
  visibleCount = 3;
  selectedVideoUrl: string | null = null;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(data => {
      this.videos = data;
      console.log('Videos loaded:', this.videos);
    });
  }

  ngAfterViewInit() {
    this.initPlayer();
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

  initPlayer() {
    if (this.videoPlayer) {
      this.player = videojs(this.videoPlayer.nativeElement, {
        controls: true,
        autoplay: false,
        preload: 'auto',
      });
      console.log('Player initialized');
    }
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
    console.log('Video object:', video);
    this.selectedVideoUrl = video.file; // Verwenden Sie `video.file`
    console.log('Playing video:', this.selectedVideoUrl);
    if (!this.player) {
      this.initPlayer();
    }
    if (this.player) {
      this.player.src({ type: 'video/mp4', src: this.selectedVideoUrl });
      this.player.ready(() => {
        this.tryToPlayVideo();
      });
    }
  }

  tryToPlayVideo() {
    const playPromise = this.player.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log('Video started automatically');
      }).catch((error: any) => {
        console.log('Video play error:', error);
      });
    }
  }

  closePlayer() {
    if (this.player) {
      this.player.pause();
    }
    this.selectedVideoUrl = null;
  }
}
