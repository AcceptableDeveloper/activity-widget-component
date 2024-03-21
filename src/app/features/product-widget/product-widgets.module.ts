import { NgModule } from '@angular/core';

import { ProductWidgetComponentContainer } from './product-widget-container.component';
import { ProductWidgetService } from './shared/services/product-widget.service';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { CommonModule } from '@angular/common';
import { ActivateBadgeComponent } from '../../core/form-components/activate-badge/activate-badge.component';
import { ProfileLinkComponent } from '../../core/form-components/profile-link/profile-link.component';
import { ColorSelectionComponent } from '../../core/form-components/color-selection/color-selection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ProductWidgetComponentContainer,
        ProductWidgetComponent,
        ActivateBadgeComponent,
        ProfileLinkComponent,
        ColorSelectionComponent,
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
