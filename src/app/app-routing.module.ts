import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./_components/login/login.component";
import {RegisterComponent} from "./_components/register/register.component";
import {DatabaseComponent} from "./_components/database/database.component";
import {AdminUpdateProfileComponent} from "./_components/admin-update-profile/admin-update-profile.component";
import {AdminProfileComponent} from "./_components/admin-profile/admin-profile.component";
import {TruckManagersPageComponent} from "./_components/truck-managers-page/truck-managers-page.component";
import {ParkingManagersPageComponent} from "./_components/parking-managers-page/parking-managers-page.component";
import {HomeComponent} from "./_components/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin-profile', component: AdminProfileComponent},
  {path: 'admin-profile/update', component: AdminUpdateProfileComponent},
  {path: 'database', component: DatabaseComponent},
  {path: 'truck-managers', component: TruckManagersPageComponent},
  {path: 'parking-managers', component: ParkingManagersPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
