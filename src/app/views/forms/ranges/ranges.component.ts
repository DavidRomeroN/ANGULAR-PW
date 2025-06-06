import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormLabelDirective, FormControlDirective } from '@coreui/angular-pro';

@Component({
    selector: 'app-ranges',
    templateUrl: './ranges.component.html',
    styleUrls: ['./ranges.component.scss'],
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, FormLabelDirective, FormControlDirective]
})
export class RangesComponent {}
