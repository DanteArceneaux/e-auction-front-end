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

  constructor(public productsService: ProductService) {

  }

  ngOnInit(): void {
    this.productsService.getAllData().subscribe((res: any) => {
     this.products = res.data;
     console.log(this.products);
    });
  }





  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }
}
