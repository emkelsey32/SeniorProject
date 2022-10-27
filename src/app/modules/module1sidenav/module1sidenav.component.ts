import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module1sidenav',
  templateUrl: './module1sidenav.component.html',
  styleUrls: ['./module1sidenav.component.scss']
})
export class Module1sidenavComponent implements OnInit {
  firstPage = 0;
  secondPage = 0;
  thirdPage = 0;
  fourthPage = 0;
  fifthPage = 0;
  sixthPage = 0;
  seventhPage = 0;
  constructor() { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("token")!);
    let mod1Progress = user.progress[0].module1.progress;
    this.firstPage = mod1Progress[0]
    this.secondPage = mod1Progress[1]
    this.thirdPage = mod1Progress[2]
    this.fourthPage = mod1Progress[3]
    this.fifthPage = mod1Progress[4]
    this.sixthPage = mod1Progress[5]
    this.seventhPage = mod1Progress[6]
  }

}
