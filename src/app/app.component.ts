import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component'
import {FooterComponent} from './footer/footer.component'
import {FeedComponent} from './feed/feed.component'
import {FriendsTabComponent} from './friends-tab/friends-tab.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,FooterComponent,FeedComponent,FriendsTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'instagram';
}
