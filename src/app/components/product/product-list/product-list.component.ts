import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Pipe, PipeTransform} from '@angular/core';
import { BidsService } from '../../../services/bids.service';

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
  productSpecificBids:any[]=[];

  constructor(public productsService: ProductService, public bidsService:BidsService) {

  }

  onSelect(value: string): void {
    this.bool=true;
    this.selectedProduct = value;
    console.log(this.selectedProduct);



    this.productsService.getProductByProductName(this.selectedProduct).subscribe((res: any) => {
      this.products = res.data.filter(x => x.productName === this.selectedProduct);
      this.productName = this.products.find(x => x.productName === this.selectedProduct).productName;
      console.log(this.products);
     }
    );

    this.bidsService.getAllBids().subscribe((res: any) => {

      this.productSpecificBids = res.data.filter(x => x.product &&  x.product?.productName == this.selectedProduct);
      console.log('product Specific Bids  : ',this.productSpecificBids);
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
