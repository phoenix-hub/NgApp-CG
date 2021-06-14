import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiurl='http://localhost:56390/api/Customers/api/Customers';

  constructor(private http:HttpClient) { }

  GetCustomers():Observable<any[]>{
    return this.http.get<any>(this.apiurl);
  }

  GetCustomersByCategory(selectedcategory:string):Observable<any[]>{
    return this.http.get<any>(`${this.apiurl}/ByCategory/${selectedcategory}`);
  }
  CustomerCategories():Observable<any[]>{
    return this.http.get<any>(`${this.apiurl}/CustomerCategories`);
  }
}
