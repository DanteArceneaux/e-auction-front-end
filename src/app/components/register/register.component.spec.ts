import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
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
import { BidsComponent } from '../bids/bids.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: LoginService;
  let router: Router;
  let httpMock: HttpTestingController;

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
      ],
      providers: [
        { provide: Router }
      ]

    }) .compileComponents();

    service = TestBed.inject(LoginService);
    router = TestBed.inject(Router);
    httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should have a register button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Menu');
  }
  );

  // it('should send register data and create new user'), () => {
  //   //

  //   const user = {
  //     "firstName": 'John',
  //     "lastName": 'Doe',
  //     "city": 'New York',
  //     "state": 'New York',
  //     "email": 'johndoe@gmail.com',
  //     "pin": 1234,
  //     "phone": "1234567890",
  //     "role": "seller"
  //   };

  //   service.registerUser(user).subscribe((data: any) => {
  //     expect(data).toEqual(user);
  //   }
  //   );

  //   const req = httpMock.expectOne('http://localhost:5000/e-auction/api/v1/auth/register');
  //   expect(req.request.method).toBe('POST');
  //   req.flush(user);
  // }

  // afterEach(() => {
  //   httpMock.verify();
  // }
  // );

});

