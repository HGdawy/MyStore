import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { Product } from 'src/assets/types';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
products:Product[]=[];
  constructor(private httpService : ProductListService) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
    
  })}
  
}
