import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {RegisterRequest} from "../_models/request/register-request";
import {CompanyDTO} from "../_models/response/company-dto";

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
}
