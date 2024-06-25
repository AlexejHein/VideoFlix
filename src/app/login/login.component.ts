import { Component, signal} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from "@angular/material/card";
import { MatFormField} from "@angular/material/form-field";
import { MatInput} from "@angular/material/input";
import { MatIcon} from "@angular/material/icon";
import { MatButton, MatIconButton} from "@angular/material/button";
import { MatCard, MatCardHeader} from "@angular/material/card";
import { RouterLink} from "@angular/router";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatFormField,
    MatInput,
    MatIcon,
    MatIconButton,
    MatCard,
    MatButton,
    RouterLink,
    MatCardHeader,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide);
    event.stopPropagation();
  }
}
