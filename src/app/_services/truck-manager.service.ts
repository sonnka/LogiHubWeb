import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {RegisterRequest} from "../_models/request/register-request";
import {CompanyDTO} from "../_models/response/company-dto";
import {ManagerRequest} from "../_models/request/manager-request";
import {TruckManagerDTO} from "../_models/response/truck-manager-dto";

@Injectable({
  providedIn: 'root'
})
export class TruckManagerService {

  private baseUrl = 'http://localhost:8080/api';

  private token: string | undefined;
  private id: string | undefined;
  private httpOptions: { headers: HttpHeaders } | undefined;

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {
  }

  register(data: RegisterRequest) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.baseUrl + '/truck-manager/register', data, httpOptions);
  }

  getCompanyList() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<CompanyDTO[]>(this.baseUrl + '/truck-company/search', httpOptions);
  }

  async getManager() {
    await this.getCredentials()

    return await this.http.get<TruckManagerDTO>(
      this.baseUrl + '/truck-manager/' + this.id, this.httpOptions).toPromise();
  }

  async updateManager(managerRequest: ManagerRequest) {
    await this.getCredentials()

    return await this.http.patch<void>(this.baseUrl + "/truck-manager/" + this.id, managerRequest,
      this.httpOptions).toPromise()
  }

  async deleteManager() {
    await this.getCredentials();

    return await this.http.delete(this.baseUrl + '/truck-manager/' + this.id, this.httpOptions)
      .toPromise();
  }

  private async getCredentials() {
    this.token = this.loginService.getToken()
    this.id = this.loginService.getUserId()

    if (!this.token || !this.id) {
      await LoginService.logout(this.router);
      throw new Error("Something went wrong!")
    }

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
  }
}
