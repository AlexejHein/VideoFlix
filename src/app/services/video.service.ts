import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  file: string;
  uploaded_at: Date;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://127.0.0.1:8000/api/videos/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getVideos(): Observable<Video[]> {
    const headers = this.authService.getAuthHeaders();
    return this.http.get<Video[]>(this.apiUrl, { headers });
  }
}
