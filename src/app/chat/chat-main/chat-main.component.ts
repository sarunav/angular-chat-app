import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements OnInit {
  items = [
    { name: 'Karlyn Carabello', img: 'https://uifaces.co/our-content/donated/3799Ffxy.jpeg', time: '25 mins ago' },
    { name: 'Junior Sabine', img: 'https://randomuser.me/api/portraits/women/65.jpg', time: 'An hour ago' },
    { name: 'Melonia Sherk', img: 'https://randomuser.me/api/portraits/women/17.jpg', time: '3 hours ago' },
    { name: 'Harrison Palmatier', img: 'https://randomuser.me/api/portraits/men/61.jpg', time: '7 hours ago' },
    { name: 'Tressa Duhart', img: 'https://randomuser.me/api/portraits/women/26.jpg', time: '10 hours ago' },
    { name: 'Erick Spiva', img: 'https://uifaces.co/our-content/donated/N5PLzyan.jpg', time: '13 hours ago' },
    { name: 'Josefina Simpson', img: 'https://randomuser.me/api/portraits/women/21.jpg', time: 'Yesterday' },
    { name: 'Natasha kirpalani', img: 'https://randomuser.me/api/portraits/women/76.jpg', time: 'Yesterday' },
    { name: 'Mariya john', img: 'https://randomuser.me/api/portraits/women/26.jpg', time: '10 hours ago' },
    { name: 'Sandra stevens', img: 'https://randomuser.me/api/portraits/women/21.jpg', time: 'Yesterday' },
  ];
  public activePillIndex = 0;
  activateClass = true;
  itemsProcessed: number;

  constructor() { }

  ngOnInit(): void {
  }

  selectPill(i: number, e: any): void {
    this.activateClass = false;
    this.activePillIndex = i;
    // this.addActiveClass(i);
  }

}
