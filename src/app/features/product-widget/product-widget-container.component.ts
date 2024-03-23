import { Component, OnInit, inject } from '@angular/core';
import { ProductWidgetService } from './shared/services/product-widget.service';
import { Product } from './shared/models/product.model';

@Component({
  selector: 'product-widget-container',
  templateUrl: './product-widget-container.component.html',
  styleUrl: './product-widget-container.component.css',
})
export class ProductWidgetComponentContainer implements OnInit {
  public productData: Product[] = [];

  private readonly productWidgetService = inject(ProductWidgetService)

  public ngOnInit(): void {
    this.productWidgetService.getProductData().subscribe(data => {
        this.productData = data;
    });
  }
}
