import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Tab } from 'bootstrap';
import {getUsers} from '../../API';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  mod1Progress = "";
  constructor() { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("token")!)
    let mod1Array = user!.progress[0].module1.progress;
    let numComplete = 0;
    for(let i = 0; i < mod1Array.length; i++){
      if(mod1Array[i] == 1){
        numComplete += 1;
      }
    }
    console.log(mod1Array.length)
    let mod1Number = Math.round(((numComplete * 100) / mod1Array.length))
    this.mod1Progress = mod1Number + "%"
  }

  async someFunc() {
    var something = await getUsers();
    console.log(await getUsers());
    console.log("Hi")

  }
  
  mod1ProgressStyle = style({
      width: this.mod1Progress
  })
}

