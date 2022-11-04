import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApitokenInterceptor implements HttpInterceptor {

  token:any= localStorage.getItem('authToken');

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let x=request.clone(
      {
        setHeaders:{Authorization: "Bearer " +  this.token}
      }
    )
    return next.handle(x);
  }
}
