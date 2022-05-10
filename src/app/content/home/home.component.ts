import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';
import { Component, OnInit } from '@angular/core';

/**
 * Displays the Home Page.
 *
 * @export
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * Creates an instance of HomeComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/home`, 'Home',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['community', 'discord', 'home', 'socials', 'twitter', 'patreon', 'youtube', 'linkedin', 'github', 'events'],
                      'Welcome to Digital Overdose !');
  }
}
