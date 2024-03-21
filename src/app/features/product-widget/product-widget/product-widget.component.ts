import { Component, Input } from '@angular/core';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'product-widget',
  templateUrl: './product-widget.component.html',
  styleUrl: './product-widget.component.css',
})
export class ProductWidgetComponent {
  @Input() product?: Product;
 }
