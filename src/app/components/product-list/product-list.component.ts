import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { Product } from 'src/assets/types';
import { AddToCartService } from '../../services/add-to-cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
products:Product[]=[];
product :Product ={
  description: "",
  id: 0,
  name: "",
  price: 0,
  url: "",
  amount: 0
 } ;

  constructor(private httpService : ProductListService,private addTocart : AddToCartService ) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
    
  })}

 

  addToCart(p:Product){
    const product :Product ={
     description: p.description,
     id: p.id,
     name: p.name,
     price: p.price,
     url: p.url,
     amount: p.amount
    } 
    
     console.log(p)
 
   this.addTocart.addToCart(product)
    
   }
  
}
