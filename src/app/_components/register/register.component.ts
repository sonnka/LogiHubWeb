import {Component} from '@angular/core';
import {TruckManagerService} from "../../_services/truck-manager.service";
import {ParkingManagerService} from "../../_services/parking-manager.service";
import {Router} from "@angular/router";
import {RegisterRequest} from "../../_models/request/register-request";
import {UtilService} from "../../_services/util.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private truckManagerService: TruckManagerService,
              private parkingManagerService: ParkingManagerService,
              private router: Router) {
  }

  registerTruckManager(firstName: string, lastName: string, email: string, password: string, companyId: string): void {
    let data = new RegisterRequest(firstName, lastName, email, password, BigInt(companyId));
    this.truckManagerService.register(data).subscribe(response => {
      },
      (error) => {
        UtilService.displayAuthError(error)
      });
    this.router.navigate(['/login']);
  }

  registerParkingManager(firstName: string, lastName: string, email: string, password: string, companyId: string): void {
    let data = new RegisterRequest(firstName, lastName, email, password, BigInt(companyId));
    this.parkingManagerService.register(data).subscribe(response => {
      },
      (error) => {
        UtilService.displayAuthError(error)
      });
    this.router.navigate(['/login']);
  }
}
