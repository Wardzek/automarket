import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BrandsListComponent } from './components/brands/brands-list/brands-list.component';
import { BrandsCreateComponent } from './components/brands/brands-create/brands-create.component';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { CarsCreateComponent } from './components/cars/cars-create/cars-create.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'favorite', component: FavoritesComponent },
    { path: 'brands', component: BrandsListComponent },
    { path: 'create-brand', component: BrandsCreateComponent },
    { path: 'cars', component: CarsListComponent },
    { path: 'create-car', component: CarsCreateComponent },
];
