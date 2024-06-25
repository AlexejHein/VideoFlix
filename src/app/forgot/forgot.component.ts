import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatCardModule} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    NgIf,
    MatCardModule,
    MatFormFieldModule
  ],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {

}
