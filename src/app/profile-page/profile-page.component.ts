import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent implements OnInit {
  firstName = "";
  lastName = "";
  userName = "";
  email = "";
  constructor() { }

  ngOnInit(): void {
    this.firstName = "firstName"
    const user = JSON.parse(localStorage.getItem("a")!)
    this.firstName = (user!.firstName)
    this.lastName = (user!.lastName)
    this.userName = (user!.username) 
    this.email = (user!.email) 
 
   }

}
