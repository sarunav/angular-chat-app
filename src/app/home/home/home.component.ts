import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedinUser: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.GetUsers();
    this.loggedinUser = JSON.parse(localStorage.getItem('user'));
    console.log('user=', JSON.parse(this.loggedinUser));
  }

}
