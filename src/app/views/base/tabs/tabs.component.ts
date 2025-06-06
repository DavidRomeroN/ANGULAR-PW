import { Component, signal } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RoundedDirective,
  RowComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent
} from '@coreui/angular-pro';
import { IconDirective } from '@coreui/icons-angular';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    imports: [
        CardBodyComponent,
        CardComponent,
        CardHeaderComponent,
        ColComponent,
        RoundedDirective,
        RowComponent,
        TabDirective,
        TabPanelComponent,
        TabsComponent,
        TabsContentComponent,
        TabsListComponent,
        IconDirective
    ]
})
export class AppTabsComponent {

  public panes = [
    { name: 'Home 01', id: 'tab-01', icon: 'cilHome' },
    { name: 'Profile 02', id: 'tab-02', icon: 'cilUser' },
    { name: 'Contact 03', id: 'tab-03', icon: 'cilCode' }
  ];

  readonly activeItem = signal(0);

  handleActiveItemChange(value: string | number | undefined) {
    this.activeItem.set(<number>value);
  }
}
