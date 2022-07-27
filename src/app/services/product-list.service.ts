import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/assets/types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<[]> {
    return this.http.get<[]>('../../assets/data.json');
  }

  getProduct(id: number | string) {
    return this.getProducts().pipe(
      
      map((Products: Product[]) => Products.find(P => P.id === +id)!)
    );
  }
}
