import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./_services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  protected readonly LoginService = LoginService;

  constructor(private router: Router) {
  }

  protected async logout() {
    await LoginService.logout(this.router)
  }
}
