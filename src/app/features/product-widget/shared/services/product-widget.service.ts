import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductWidgetService {

  private readonly http = inject(HttpClient)

  public getProductData(): Observable<Product[]> {
    return this.http.get<any[]>('https://api.mocki.io/v2/016d11e8/product-widgets')
      .pipe(
        map((data: any[]) => data.map(item => new Product(item)))
      );
  }
}
