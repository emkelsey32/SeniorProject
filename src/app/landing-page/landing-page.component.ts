import { Component, OnInit } from '@angular/core';
import {getUsers} from '../../API';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async someFunc() {
    var something = await getUsers();
    console.log(await getUsers());
    console.log("Hi")
  }
  
}

