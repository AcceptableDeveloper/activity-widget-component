import { NgModule } from '@angular/core';

import { ProductWidgetComponentContainer } from './product-widget-container.component';
import { ProductWidgetService } from './shared/services/product-widget.service';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ProductWidgetComponentContainer,
        ProductWidgetComponent
    ],
    providers: [
        ProductWidgetService,
    ],
    exports: [
        ProductWidgetComponentContainer
    ]
})
export default class ProductWidgetsModule {
}
