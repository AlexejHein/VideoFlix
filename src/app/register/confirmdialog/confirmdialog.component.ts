import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h1 mat-dialog-title>Email Bestätigung</h1>
    <div mat-dialog-content>Bitte bestätigen Sie Ihre Email zuerst.</div>
    <div mat-dialog-actions>
      <button mat-button (click)="onOkClick()">OK</button>
    </div>
  `,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton
  ],
  standalone: true
})
export class ConfirmdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmdialogComponent>) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}
