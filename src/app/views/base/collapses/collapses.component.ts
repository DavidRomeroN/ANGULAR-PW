import { Component } from '@angular/core';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ButtonDirective, CollapseDirective } from '@coreui/angular-pro';

@Component({
    selector: 'app-collapses',
    templateUrl: './collapses.component.html',
    styleUrls: ['./collapses.component.scss'],
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ButtonDirective, CollapseDirective]
})
export class CollapsesComponent {

  collapses = [false, false, false, false];

  constructor() { }

  toggleCollapse(id: number): void {
    // @ts-ignore
    this.collapses[id] = !this.collapses[id];
  }

}
