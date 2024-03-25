import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductWidgetComponent } from './product-widget.component';
import { Product } from '../shared/models/product.model';
import { ProductColor } from '../shared/enums/product-color.enum';
import { ProductType } from '../shared/enums/product-type.enum';
import { ProductAction } from '../shared/enums/product-action.enum';

describe('ProductWidgetComponent', () => {
  let component: ProductWidgetComponent;
  let fixture: ComponentFixture<ProductWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update selected color', () => {
    const mockProduct: Product = { id: 1, type: ProductType.Carbon, amount: 10, action: ProductAction.Offsets, active: true, linked: false, selectedColor: ProductColor.Black };
    component.product = mockProduct;
    fixture.detectChanges();

    expect(component.selectedColor).toBeUndefined();

    component.updateSelectedColor(ProductColor.Green);
    expect(component.selectedColor).toEqual(ProductColor.Green);
    expect(component.product!.selectedColor).toEqual(ProductColor.Green);
  });

  it('should get correct color hex', () => {
    expect(component.getColorHex()).toEqual('#3B755F');
    expect(component.getColorHex(ProductColor.Blue)).toEqual('#2E3A8C');
    expect(component.getColorHex(ProductColor.Beige)).toEqual('#F2EBDB');
    expect(component.getColorHex(ProductColor.White)).toEqual('#FFFFFF');
    expect(component.getColorHex(ProductColor.Black)).toEqual('#212121');
  });

  // Add more tests as needed
});
