import { Component, OnInit } from '@angular/core';
import { Product } from 'src/assets/types';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'src/app/services/confirmation.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls:["./cart.component.css"]
})
export class CartComponent implements OnInit {

  fullName!: string ;
  adress!: string ;
  card!: number ;
cartItems :Product[]=[];
totalPrice:number=0

  constructor(private cart:AddToCartService , private router : Router ,private conf:ConfirmationService) { }

  ngOnInit(): void {

    
      this.cartItems = this.cart.getCart()
      this.totalPrice=  this.cart.totalPrice()
    
  }
onSubmit(){
  const fullName : string = this.fullName
  const totalPrice : number = this.totalPrice
  this.conf.conf(fullName,totalPrice)
  this.router.navigate(['/confirmation'])

}

onChange(e:any,p:Product){
  p.amount=Number( e.target.value )
  this.cart.changeAmount(p)
  this.totalPrice=  this.cart.totalPrice()
  this.cartItems = this.cart.getCart()
}
  
}
