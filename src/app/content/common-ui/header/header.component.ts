import { Component, OnInit } from '@angular/core';

/**
 * The header element of the page.
 *
 * @export
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /** What page is currently loaded, used to highlight the navbar. */
  currentPath: string = '/home';

  /**
   * Creates an instance of HeaderComponent.
   *
   * @param router The Router to observe the url path from.
   */
  constructor() { }

  /** Initialises the component. */
  ngOnInit(): void {
  }

}
