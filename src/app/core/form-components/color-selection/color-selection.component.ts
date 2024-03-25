import { Component, Input } from '@angular/core';
import { ProductColor } from '../../../features/product-widget/shared/enums/product-color.enum';

@Component({
  selector: 'color-selection',
  templateUrl: './color-selection.component.html',
  styleUrl: './color-selection.component.css'
})
export class ColorSelectionComponent { 
  @Input() selectedColor?: ProductColor = ProductColor.White;

  public colors = Object.values(ProductColor);

  public updateSelectedColor(color: ProductColor) {
    this.selectedColor = color;
  }
}
