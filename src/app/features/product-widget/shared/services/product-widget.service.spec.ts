import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductWidgetService } from './product-widget.service';
import { Product } from '../models/product.model';

describe('ProductWidgetService', () => {
  let service: ProductWidgetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductWidgetService]
    });
    service = TestBed.inject(ProductWidgetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products', () => {
    const mockProducts: any[] = [
      { id: 1, type: 'Type 1', amount: 10, action: 'Action 1', active: true, linked: false, selectedColor: 'Blue' },
      { id: 2, type: 'Type 2', amount: 20, action: 'Action 2', active: false, linked: true, selectedColor: 'Green' }
    ];

    const expectedProducts: Product[] = mockProducts.map(item => new Product(item));

    service.getProductData().subscribe((products: Product[]) => {
      expect(products).toEqual(expectedProducts);
    });

    const req = httpMock.expectOne('https://api.mocki.io/v2/016d11e8/product-widgets');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });
});
