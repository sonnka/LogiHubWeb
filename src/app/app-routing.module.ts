import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./_components/login/login.component";
import {RegisterComponent} from "./_components/register/register.component";
import {DatabaseComponent} from "./_components/database/database.component";
import {AdminUpdateProfileComponent} from "./_components/admin-update-profile/admin-update-profile.component";
import {AdminProfileComponent} from "./_components/admin-profile/admin-profile.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin-profile', component: AdminProfileComponent},
  {path: 'admin-profile/update', component: AdminUpdateProfileComponent},
  {path: 'database', component: DatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
