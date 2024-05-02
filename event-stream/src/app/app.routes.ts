import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/myspace', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((mod) => mod.HomeComponent),
  },
   { path: 'events', loadComponent: () =>
      import('./components/events/events.component').then((mod) => mod.EventsComponent)},
  { path: 'live', loadComponent: () =>
      import('./components/live/live.component').then((mod) => mod.LiveComponent) },
  { path: 'myspace', loadComponent: () =>
      import('./components/my-space/my-space.component').then((mod) => mod.MySpaceComponent) },
  { path: 'register', loadComponent: () =>
      import('./components/register/register.component').then((mod) => mod.RegisterComponent)},
  { path: 'videos', loadComponent: () =>
      import('./components/videos/videos.component').then((mod) => mod.VideosComponent)},
];

