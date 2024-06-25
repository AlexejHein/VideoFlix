import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {DataRowOutlet} from "@angular/cdk/table";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, DataRowOutlet, RouterLink, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VideoFlix';
}
