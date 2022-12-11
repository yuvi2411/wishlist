import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { MatAutocompleteModule} from '@angular/material/autocomplete'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishlistPageComponent } from './components/wishlist-page/wishlist-page.component';
import { ApitokenInterceptor } from './interceptor/apitoken.interceptor';
import { SelectCustomsComponent } from './Dropdown/select-customs/select-customs.component';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatCheckboxModule} from '@angular/material/checkbox' ;
import {  MatChipsModule} from '@angular/material/chips' ;

import { MatIconModule} from '@angular/material/icon';
import { SelectAllcheckboxComponent } from './Dropdown/select-allcheckbox/select-allcheckbox.component' ;


@NgModule({
  declarations: [
    AppComponent,
    WishlistPageComponent,
    SelectCustomsComponent,
    SelectAllcheckboxComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApitokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
