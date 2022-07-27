import { Component, OnInit, Input ,Output ,EventEmitter} from '@angular/core';
import {Product} from "../../../assets/types.js";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls:['./product-item.component.css']
  
})
export class ProductItemComponent implements OnInit {
  amount:number=1;
@Input() product:Product={description: "",
id: 0,
name: "",
price: 0,
url: "",
amount:0};


constructor() { }
@Output() addToCart: EventEmitter<Product>= new EventEmitter





  ngOnInit(): void {
    this.product={...this.product,amount:1}
  }

    

  add():void{
    const product:Product ={
      description: this.product.description,
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      url: this.product.url,
      amount:Number(this.amount)
    }
    
    this.addToCart.emit(product)
    
    
}
 

}
