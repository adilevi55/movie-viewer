import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent {
  @Input() navLinks;
  @Input() menuName;

}
