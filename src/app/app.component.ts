import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import ProductWidgetsModule from './features/product-widget/product-widgets.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ProductWidgetsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Greenspark';
}
