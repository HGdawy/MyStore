import { Component, OnInit ,Input} from '@angular/core';
import { Product } from 'src/assets/types';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductListService } from 'src/app/services/product-list.service';
import { Observable } from 'rxjs';
import { AddToCartService } from 'src/app/services/add-to-cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls:['./Product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
   
   product$!: Observable<Product>;
   amount :number=1;



  constructor(
    private route: ActivatedRoute,
    private service: ProductListService,
    private addTocart:AddToCartService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getProduct(params.get('id')!))
    );

  }

  
  addToCart(p:Product){
   
   const product={
    description: p.description,
    id: p.id,
    name: p.name,
    price: p.price,
    url: p.url,
    amount: Number(this.amount)
   }
 
   this.addTocart.addToCart(product)
  
   }
}
