import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';
import { ApitokenInterceptor } from './interceptor/apitoken.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WishlistPageComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApitokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
