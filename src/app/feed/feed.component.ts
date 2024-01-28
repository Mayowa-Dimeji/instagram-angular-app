import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'


@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  posts=[
    {
      "id": 1,
      "user": "Alice",
      "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "likes": 10,
      "picture": "assets/c.jpg",
      "comments": [
        {"user": "Bob", "comment": "Great post!"},
        {"user": "Charlie", "comment": "Nice job!"}
      ]
    },
    {
      "id": 2,
      "user": "Bob",
      "info": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "likes": 5,
      "picture": "assets/x.jpg",
      "comments": [
        {"user": "Alice", "comment": "Thanks!"},
        {"user": "Eve", "comment": "Keep it up!"}
      ]
    },
    {
      "id": 3,
      "user": "Charlie",
      "info": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "likes": 8,
      "picture": "assets/smile.jpg",
      "comments": [
        {"user": "David", "comment": "Impressive!"},
        {"user": "Frank", "comment": "Well done!"}
      ]
    },
    {
      "id": 4,
      "user": "David",
      "info": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "likes": 12,
      "picture": "assets/s.jpg",
      "comments": [
        {"user": "Alice", "comment": "Amazing work!"},
        {"user": "Bob", "comment": "Love it!"}
      ]
    },
    {
      "id": 5,
      "user": "Eve",
      "info": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "likes": 7,
      "picture": "assets/o.jpg",
      "comments": [
        {"user": "Charlie", "comment": "Incredible!"},
        {"user": "David", "comment": "Fantastic job!"}
      ]
    },
    {
      "id": 6,
      "user": "Frank",
      "info": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
      "likes": 15,
      "picture": "assets/ll.jpg",
      "comments": [
        {"user": "Alice", "comment": "Brilliant!"},
        {"user": "Eve", "comment": "Well said!"}
      ]
    },
    {
      "id": 7,
      "user": "Grace",
      "info": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "likes": 20,
      "picture": "assets/k.jpg",
      "comments": [
        {"user": "Frank", "comment": "Absolutely stunning!"},
        {"user": "Grace", "comment": "You're amazing!"}
      ]
    },
    {
      "id": 8,
      "user": "Helen",
      "info": "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      "likes": 3,
      "picture": "assets/h.jpg",
      "comments": [
        {"user": "David", "comment": "Great content!"},
        {"user": "Helen", "comment": "Love this!"}
      ]
    },
    {
      "id": 9,
      "user": "Ian",
      "info": "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
      "likes": 9,
      "picture": "assets/gj.jpg",
      "comments": [
        {"user": "Ian", "comment": "Awesome post!"},
        {"user": "Frank", "comment": "Impressive work!"}
      ]
    },
    {
      "id": 10,
      "user": "Jack",
      "info": "Sed lectus. Integer euismod lacus luctus magna.",
      "likes": 18,
      "picture": "assets/x.jpg",
      "comments": [
        {"user": "Alice", "comment": "Fantastic!"},
        {"user": "Jack", "comment": "Thanks everyone!"}
      ]
    }
  ]
  

}
