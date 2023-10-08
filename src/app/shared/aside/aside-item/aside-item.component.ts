import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside-item',
  templateUrl: './aside-item.component.html',
  styleUrls: ['./aside-item.component.scss']
})
export class AsideItemComponent {
  @Input() link?: string | any[] | null | undefined;
  @Input() text?: string;
  @Input() icon?: string;
}
