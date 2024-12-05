import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [

    {path:'',component:AuthComponent},
    {path:'home',component:HomeComponent}

];
