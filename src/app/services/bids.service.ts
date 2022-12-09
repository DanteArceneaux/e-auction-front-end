import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})

export class BidsService {

    constructor(private http: HttpClient) { }


  getAllBids(): Observable<any> {
    return this.http.get('http://localhost:5000/e-auction/api/v1/bids/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

}
