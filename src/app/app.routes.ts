import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {ForgotComponent} from "./forgot/forgot.component";
import {ImprintComponent} from "./imprint/imprint.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {VideoComponent} from "./video/video.component";
import {AuthGuard} from "./AuthGuard";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'video', component: VideoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect root to home
  { path: '**', redirectTo: '/home' }  // Wildcard route for a 404 page
];

