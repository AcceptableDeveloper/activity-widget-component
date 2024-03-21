import { Component, Input } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductType } from '../shared/enums/product-type.enum';

@Component({
  selector: 'product-widget',
  templateUrl: './product-widget.component.html',
  styleUrl: './product-widget.component.css',
})
export class ProductWidgetComponent {
  @Input() product?: Product;

  public productType = ProductType;
 }
