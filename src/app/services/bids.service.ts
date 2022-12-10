import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})

export class BidsService {

  private bids: Product[] = [];
  private bidsUpdated = new Subject<Product[]>();


    constructor(private http: HttpClient) { }


  getAllBids(): Observable<any> {
    return this.http.get('http://localhost:5000/e-auction/api/v1/bids/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBidsByProductName(productName: string): Observable<any> {
    return this.http.get(`http://localhost:5000/e-auction/api/v1/bids/productName/${productName}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }


  getBidsUpdateListener() {
    return this.bidsUpdated.asObservable();
  }

}
