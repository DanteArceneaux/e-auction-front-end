import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { BidsService } from 'src/app/services/bids.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit, OnDestroy {

  bids: any[] = [];
  private bidsSub: Subscription;
  selectedBid: string;
  bidName: string;

  buyerId: string;
  productId: string;
  firstName: string;
  lastName: string;
  phone: string;
  state: string;
  city: string;
  email: string;
  pin: number;
  bidAmount: number;
  address: string;



  constructor( public bidsService: BidsService   ) { }

  onSelect(value: string): void {
    this.selectedBid = value;
    console.log(this.selectedBid);

    console.log("From Bids Component :", this.selectedBid)
    this.bidsService.getBidsByProductName(this.selectedBid).subscribe((res: any) => {
      this.bids = res.data.filter(x => x.productName === this.selectedBid);
      console.log(this.bids);
      this.bidName = this.bids.find(x => x.productName === this.selectedBid).productName;
      console.log(this.bidName);
     }
    );

  }

  onFetchBidDetails(){
    this.bidsService.getAllBids().subscribe((res: any) => {
      this.bids = res.data;
      console.log(this.bids);
      });
  }

  addBid(form: NgForm){
    if(form.invalid){
      return;
    }
    const bid = {
      buyerId: form.value.buyerId,
      productId: form.value.productId,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      phone: form.value.phone,
      address: form.value.address,
      state: form.value.state,
      city: form.value.city,
      email: form.value.email,
      pin: form.value.pin,
      bidAmount: form.value.bidAmount,

    }

    this.bidsService.addBid(bid).
    subscribe((res: any) => {
      console.log(res);
      this.bids.push(res.data);
      form.resetForm();
    }
    );
  }

  ngOnInit(): void {
    this.bidsService.getAllBids().subscribe((res: any) => {
      this.bids = res.data;
      console.log(this.bids);
     });
  }
  ngOnDestroy(): void {
    if(this.bidsSub){
      this.bidsSub.unsubscribe();
    }
  }




}
