import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsComponent } from './bids.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BidsComponent', () => {
  let component: BidsComponent;
  let fixture: ComponentFixture<BidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidsComponent ],
      imports: [HttpClientTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(BidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a function called onFetchBidDetails', () => {
    expect(component.onFetchBidDetails).toBeTruthy();
  }
  );

  //onFetchBidDetails should work
  it('onFetchBidDetails should work', () => {
    component.onFetchBidDetails();
    expect(component.bids).toBeTruthy();
  }
  );

});
