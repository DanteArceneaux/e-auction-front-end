import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from '../header/header.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { BidsComponent } from '../bids/bids.component';
import { AppComponent } from 'src/app/app.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
        MatMenuModule,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a menu button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Menu');
  }
  );

  //it should have an email input field
  it('should have an email input field', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-label').textContent).toContain('Email');
  });

  //it should mat-form-field
  it('should have a mat-form-field', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-form-field')).toBeTruthy();
  }
  );


});
