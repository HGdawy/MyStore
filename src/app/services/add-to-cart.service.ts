import { Injectable } from '@angular/core';
import { Product } from 'src/assets/types';
@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
cartItems : Product[]=[];


  constructor() { }


addToCart(product:Product){

  this.cartItems.forEach(p=> p.id === product.id ? p.amount=p.amount!+product.amount! :null)

  !this.cartItems.find(p=>p.id===product.id)&&this.cartItems.push(product)

 window.alert("Product added to Cart")
}

getCart(){
  return this.cartItems
}

changeAmount(p:Product){

  this.cartItems.find(pro=>pro.id===p.id ? pro.amount = p.amount :null)
  this.cartItems=this.cartItems.filter(p=>p.amount!=0||window.alert("you have remove this item from cart"))
  console.log(this.cartItems)

}

totalPrice(){
  const x=this.cartItems.map((p:Product)=>p.amount!*p.price)
  const total = x.reduce((f, a) => f + a, 0)
  return total

}
}
