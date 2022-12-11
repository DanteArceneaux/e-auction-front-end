import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

  private products: Product[] = [];
  private productsUpdated = new Subject<Product[]>();

    private url = 'http://localhost:5000/e-auction/api/v1/products/add-product';

      constructor(private http: HttpClient) { }


getAllData(): Observable<any> {
  return this.http.get('http://localhost:5000/e-auction/api/v1/products/').pipe(
    map((res: any) => {
      return res;
    })
  );
}

getProductByProductName(productName: string): Observable<any> {
  return this.http.get('http://localhost:5000/e-auction/api/v1/products/productName/' + productName + `/`).pipe(
    map((res: any) => {
      return res;
    })
  );
}

getProductUpdateListener() {
  return this.productsUpdated.asObservable();
}

}
