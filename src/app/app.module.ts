import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './_components/_general/login/login.component';
import {RegisterComponent} from './_components/_general/register/register.component';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatFormField} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {MatInput} from "@angular/material/input";
import {AdminProfileComponent} from './_components/_admin/admin-profile/admin-profile.component';
import {AdminUpdateProfileComponent} from './_components/_admin/admin-update-profile/admin-update-profile.component';
import {DatabaseComponent} from './_components/_admin/database/database.component';
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import {TruckManagersPageComponent} from './_components/_admin/truck-managers-page/truck-managers-page.component';
import {ParkingManagersPageComponent} from './_components/_admin/parking-managers-page/parking-managers-page.component';
import {HomeComponent} from './_components/_general/home/home.component';
import {
  TruckManagerProfileComponent
} from './_components/_truck-manager/truck-manager-profile/truck-manager-profile.component';
import {
  ParkingManagerProfileComponent
} from './_components/_parking-manager/parking-manager-profile/parking-manager-profile.component';
import {UpdateProfileComponent} from './_components/_general/update-profile/update-profile.component';
import {
  TruckManagerInvoicesComponent
} from './_components/_truck-manager/truck-manager-invoices/truck-manager-invoices.component';
import {
  ParkingManagerInvoicesComponent
} from './_components/_parking-manager/parking-manager-invoices/parking-manager-invoices.component';
import {TruckComponent} from './_components/_truck-manager/truck/truck.component';
import {TruckUpdateComponent} from './_components/_truck-manager/truck-update/truck-update.component';
import {ParkingPlaceComponent} from './_components/_parking-manager/parking-place/parking-place.component';
import {
  ParkingPlaceUpdateComponent
} from './_components/_parking-manager/parking-place-update/parking-place-update.component';
import {InvoiceComponent} from './_components/_general/invoice/invoice.component';
import {InvoiceUpdateComponent} from './_components/_truck-manager/invoice-update/invoice-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminProfileComponent,
    AdminUpdateProfileComponent,
    DatabaseComponent,
    TruckManagersPageComponent,
    ParkingManagersPageComponent,
    HomeComponent,
    TruckManagerProfileComponent,
    ParkingManagerProfileComponent,
    UpdateProfileComponent,
    TruckManagerInvoicesComponent,
    ParkingManagerInvoicesComponent,
    TruckComponent,
    TruckUpdateComponent,
    ParkingPlaceComponent,
    ParkingPlaceUpdateComponent,
    InvoiceComponent,
    InvoiceUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
    MatFormField,
    MatOption,
    MatAutocomplete,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatInput,
    MatIcon,
    MatMiniFabButton
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
