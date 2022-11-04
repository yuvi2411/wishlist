import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishServiceService {

  constructor(public http: HttpClient) { }

login(){
  const data=this.http.post<any>("https://bookcart.azurewebsites.net/api/login",{username:"yuvarajs123",password:"Tamil_2411"})
  .pipe(map((response: { token: string; }) => { 
      localStorage.setItem('authToken', response.token);
     }));
    return data
}

  getapidata(userId: any) {
     const returndata = this.http.get(`https://bookcart.azurewebsites.net/api/Wishlist/${userId}`);
      return returndata;
  }
  addtocart(userId: any, bookId: any) {
    const returndata =this.http.post(`https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/${userId}/${bookId}`, {});
    return returndata;
  }
  removewishlist(userId: any, bookId: any) {
     const returndata= this.http.post(`https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/${userId}/${bookId}`, {});
     return returndata;
  }
  clearwishlist(userId: any) {
    const returndata = this.http.delete(`https://bookcart.azurewebsites.net/api/Wishlist/${userId}`);
    return returndata;
  }




}
