import { Component, Input } from '@angular/core';
import { GridConfig } from './models/grid-config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'grid-ui-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-ui-lib.component.html',
  styleUrls: ['./grid-ui-lib.component.scss']
})
export class GridUiLibComponent {
  @Input() gridConfig!: GridConfig;

  getObjectKeys(data:any): string[]{
    return Object.keys(data);
  }
}
