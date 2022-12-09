import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

  products: Product[] = [];
  private productsSub: Subscription;
  selectedProduct: string;
  productName: string;
  bool: boolean = false;

  constructor(public productsService: ProductService) {

  }

  onSelect(value: string): void {
    this.bool=true;
    this.selectedProduct = value;
    console.log(this.selectedProduct);

    this.productsService.getProductByProductName(this.selectedProduct).subscribe((res: any) => {
      this.products = res.data.filter(x => x.productName === this.selectedProduct);
      console.log(this.products);
      this.productName = this.products.find(x => x.productName === this.selectedProduct).productName;
      console.log(this.productName);
     }
    );


  }


  onFetchProductDetails(){

    this.productsService.getAllData().subscribe((res: any) => {
      this.products = res.data;
      console.log(this.products);

     });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }
}
