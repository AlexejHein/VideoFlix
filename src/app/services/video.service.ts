// video.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string; // Fügen Sie dieses Feld hinzu
  file: string;
  uploaded_at: Date;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://127.0.0.1:8000/api/videos/';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }
}


