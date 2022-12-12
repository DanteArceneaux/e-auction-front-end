import { Injectable, Injector } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { LoginService } from './services/login.service';

import { Observable } from 'rxjs';

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

        let loginService = this.injector.get(LoginService);

      // console.log("interceptor: " + req.url);
      req = req.clone({
        setHeaders: {
            Authorization: `Bearer ${loginService.getToken()}`,
        },
        withCredentials: true
      });

      return next.handle(req);
  }
}
