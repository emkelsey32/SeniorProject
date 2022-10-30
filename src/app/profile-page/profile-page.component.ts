import { Component, OnInit } from '@angular/core';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';
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
  user = JSON.parse(localStorage.getItem("token")!)

  constructor() { }

  svg = createAvatar(style, {
    seed: 'custom-seed',
    // ... and other options
  });

  ngOnInit(): void {
    this.firstName = "firstName"
    this.firstName = (this.user!.firstName)
    this.lastName = (this.user!.lastName)
    this.userName = (this.user!.username) 
    this.email = (this.user!.email) 
 
   }

}
