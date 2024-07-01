import { Routes } from '@angular/router';
import { authGuard } from './auth-guard/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { ViewsnippetComponent } from './components/viewsnippet/viewsnippet.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'snippet', component: SnippetsComponent, canActivate: [authGuard] },
  { path : 'snippet/:id', component: ViewsnippetComponent},
  { path: '**', component: NotfoundComponent },
];
