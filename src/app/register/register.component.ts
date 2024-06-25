import {Component, signal} from '@angular/core';
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import { MatDialog} from "@angular/material/dialog";
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatSuffix,
    MatIconButton,
    MatCard,
    MatButton,
    RouterLink,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmdialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/login']);
    });
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide);
    event.stopPropagation();
  }
}
