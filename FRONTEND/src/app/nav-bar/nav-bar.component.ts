import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser: string;
  constructor(private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  loggedIn(){
     this.loggedinUser=localStorage.getItem('token');
     return this.loggedinUser;
  }

  onLogOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    this.alertify.success("You are logged out");
  }
}
