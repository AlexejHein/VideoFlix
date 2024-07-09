import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import {MatFormField} from "@angular/material/form-field";
import {MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    MatFormField,
    MatCard,
    MatCardHeader,
    FormsModule,
    MatInput,
    MatIcon,
    MatIconButton,
    MatButton,
    MatLabel,
    MatCardSubtitle,
    MatCardTitle
  ],
  standalone: true
})
export class RegisterComponent {
  user = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password1: '',
    password2: ''
  };

  constructor(public dialog: MatDialog, private router: Router, private authService: AuthService) { }

  register() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']).then(r => {});
      },
      error => {
        console.error('Registration failed', error);
        if (error.status === 400) {
          console.error('Validation errors:', error.error);
        }
      }
    );
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmdialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/login']).then(r => {});
    });
  }
}
