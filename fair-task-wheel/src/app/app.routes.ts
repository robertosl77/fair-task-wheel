import { Routes } from '@angular/router';
import { PersonasListComponent } from './features/personas/personas-list/personas-list.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'personas',
  },
  {
    path: 'personas',
    component: PersonasListComponent,
  },
];
