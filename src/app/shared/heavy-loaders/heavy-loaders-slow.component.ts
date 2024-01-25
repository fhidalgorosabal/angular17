import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1>Heavy Loaders Slow</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent { }
