import { Component } from '@angular/core';
import { Client, NgxSoapService } from 'ngx-soap';
//import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  client: Client;
  intA = 2;
  intB = 354;
  message: any;
  xmlResponse: string;

  constructor(private soap: NgxSoapService) {

    this.soap.createClient('http://www.dneonline.com/calculator.asmx?wsdl')
      .then(client => {
          console.log('Client', client);
          this.client = client;
      })
      .catch(err => console.log('Error', err));
  }


  callService() {
    console.log("Gaaa");
    this.sum();
  }

  sum() {
    const body = {
        intA: this.intA,
        intB: this.intB
    };

    this.client.call('Add', body).subscribe(res => {
        this.xmlResponse = res.responseBody;
        this.message = res.result.AddResult;
        console.log(this.message);
    }, err => console.log(err));
  }

}


