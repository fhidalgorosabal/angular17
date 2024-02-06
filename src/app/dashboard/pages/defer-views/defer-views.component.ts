import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoadersSlowComponent
  ],
  templateUrl: './defer-views.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent { }
