import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    HeavyLoadersFastComponent
  ],
  templateUrl: './defer-options.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent { }
