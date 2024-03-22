import { Component, Input } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductType } from '../shared/enums/product-type.enum';
import { ProductColor } from '../shared/enums/product-color.enum';

@Component({
  selector: 'product-widget',
  templateUrl: './product-widget.component.html',
  styleUrl: './product-widget.component.scss',
})
export class ProductWidgetComponent {
  @Input() product?: Product;
  public colors = Object.values(ProductColor);
  selectedColor?: ProductColor = this.product?.selectedColor;

  public productType = ProductType;

  public updateSelectedColor(color: ProductColor) {
    this.selectedColor = color;
    this.product!.selectedColor = color;
  }
 }
