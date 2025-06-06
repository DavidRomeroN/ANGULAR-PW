import { Component } from '@angular/core';
import { TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular-pro';

@Component({
    templateUrl: 'typography.component.html',
    imports: [
        TextColorDirective,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
    ]
})
export class TypographyComponent {}
