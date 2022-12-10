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


  ngOnInit(): void {
    this.bidsService.getAllBids().subscribe((res: any) => {
      this.bids = res.data;
      console.log(this.bids);
     });
  }
  ngOnDestroy(): void {
   this.bidsSub.unsubscribe();
  }




}
