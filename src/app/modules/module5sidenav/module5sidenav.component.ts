import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module5sidenav',
  templateUrl: './module5sidenav.component.html',
  styleUrls: ['./module5sidenav.component.scss']
})
export class Module5sidenavComponent implements OnInit {
  firstPage = 0;
  secondPage = 0;
  thirdPage = 0;
  fourthPage = 0;
  fifthPage = 0;
  constructor() { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("token")!);
    let mod1Progress = user.progress[0].module5.progress;
    this.firstPage = mod1Progress[0]
    this.secondPage = mod1Progress[1]
    this.thirdPage = mod1Progress[2]
    this.fourthPage = mod1Progress[3]
    this.fifthPage = mod1Progress[4]
  }


}
