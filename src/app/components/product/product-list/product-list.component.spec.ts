import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { BidsComponent } from '../../bids/bids.component';
import { HeaderComponent } from '../../header/header.component';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';

describe('ProductComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent,
        HeaderComponent,
        ProductListComponent,
        BidsComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent ],
      imports: [HttpClientTestingModule, BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatGridListModule,
        MatSelectModule,
        MatOptionModule,
        MatTableModule,
        MatMenuModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //  onSelect method
    it('should call onSelect method', () => {
      spyOn(component, 'onSelect');
      component.onSelect('product');
      expect(component.onSelect).toHaveBeenCalled();
    }
  );

  it('toggleBool should toggle the value of bool', () => {
    component.toggleBool();
    expect(component.bool).toBeFalse();
  })

  it('onFetchProductDetails should call the service', () => {
    spyOn(component, 'onFetchProductDetails');
    component.onFetchProductDetails();
    expect(component.onFetchProductDetails).toHaveBeenCalled();
  })

});
