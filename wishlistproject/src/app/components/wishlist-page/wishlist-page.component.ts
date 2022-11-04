import { Component, OnInit } from '@angular/core';
import { WishServiceService } from 'src/app/services/wish-service.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {

  constructor(private receivedservicedata: WishServiceService) { }
  
  public wishdata:any ;


  ngOnInit(): void {
    this.receivedservicedata.login().subscribe();;
    this.receivedservicedata.getapidata(1258).subscribe(recievedvalue => {
      this.wishdata = recievedvalue;
      console.log(recievedvalue)
    })
  }
  
  addtocart(adddata: any) {
    this.receivedservicedata.addtocart(1258, adddata).subscribe();
    
  }

  removefromwishlist(removedata: any) {
   this.receivedservicedata.removewishlist(1258, removedata.bookId).subscribe();
   // this.delete(removedata)
  }
  clearWishlist() {
    this.wishdata = [];
    this.receivedservicedata.clearwishlist(1258).subscribe();
  }

//  delete(removedata:any){

//   let dele=this.wishdata.indexOf(removedata)

//   console.log(dele)
//   this.wishdata.slice(dele)
//
 }
 


