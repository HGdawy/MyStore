import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../assets/types.js";
import { AddToCartService } from '../../services/add-to-cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls:['./product-item.component.css']
  
})
export class ProductItemComponent implements OnInit {
@Input() product:Product={description: "",
id: 0,
name: "",
price: 0,
url: "",
amount:1};


constructor(private addTocart : AddToCartService ) { }

amount:number=1;

  ngOnInit(): void {
    this.product={...this.product,amount:1}
  }



  addToCart(){
   const product :Product ={
    description: this.product.description,
    id: this.product.id,
    name: this.product.name,
    price: this.product.price,
    url: this.product.url,
    amount: Number(this.amount)
   } 
    

  this.addTocart.addToCart(product)
   
  }

}
