import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { BidsService } from 'src/app/services/bids.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent {

  bids: any[] = [];
  private bidsSub: Subscription;

  constructor( public bidsService: BidsService   ) { }


}
