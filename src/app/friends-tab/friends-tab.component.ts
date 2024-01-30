import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-friends-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friends-tab.component.html',
  styleUrl: './friends-tab.component.css'
})
export class FriendsTabComponent {
  friends = [
    { id: 1, picture: "assets/bt.jpg" },
    { id: 2, picture: "assets/c.jpg" },
    { id: 3, picture: "assets/x.jpg" },
    { id: 4, picture: "assets/gj.jpg" },
    { id: 5, picture: "assets/h.jpg" },
    { id: 6, picture: "assets/k.jpg" },
    { id: 7, picture: "assets/ll.jpg" },
    { id: 8, picture: "assets/o.jpg" },
    { id: 9, picture: "assets/s.jpg" },
    { id: 10, picture: "assets/smile.jpg" }
  ];
  
}
