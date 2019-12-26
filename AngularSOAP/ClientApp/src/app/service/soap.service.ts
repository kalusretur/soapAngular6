import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { NgxSoapService, Client } from 'ngx-soap';

@Injectable({
  providedIn: 'root'
})
export class SoapService {

  constructor(
      private httpClient: NgxSoapService
  ) { }

  private POST_ENDPOINT: string = "http://www.dneonline.com";
  private BASE_URL: string = "/calculator.asmx?wsdl";
  private REQUEST_URL: string = `${this.BASE_URL}/${this.POST_ENDPOINT}`;

  callSoapService(val1: number, val2: number) {
      this.httpClient.createClient(this.REQUEST_URL);
  }

}
