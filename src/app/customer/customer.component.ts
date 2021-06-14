import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../Services/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  options: string[];

  CustomersList: any = [];

  selectedOption: string;

  recordFound: number = 0;

  constructor(private service: CustomersService) {
    this.options = [];
    this.selectedOption = "";
  }

  onOptionsSelected(value: string) {
    //console.log("the selected value is " + value);
    if (value == '0') {
      this.GetCustomers(); //Get All available customers
    }
    else {
      this.GetCustomersByCategory(value); //Get filtered customers
    }
  }

  ngOnInit(): void {
    this.BindOptions();
    this.GetCustomers();
    this.recordFound = this.CustomersList.length;
  }

  GetCustomers() {
    this.service.GetCustomers().subscribe(x => {
      this.CustomersList = x;
      this.recordFound = this.CustomersList.length;
      //console.info(`Json ${JSON.stringify(x)}`);
    })
  }
  GetCustomersByCategory(_selectedOption: string): void {
    this.service.GetCustomersByCategory(_selectedOption).subscribe(x => {
      this.CustomersList = x;
      this.recordFound = this.CustomersList.length;
      //console.info(`Json ${JSON.stringify(x)}`);
    });
  }

  BindOptions() {
    this.service.CustomerCategories().subscribe(x => {
      this.options = x;
      //console.info(`Json ${JSON.stringify(x)}`);
    })
  }
}
