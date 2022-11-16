import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {getUsers} from '../../API';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  mod1Progress = "";
  mod2Progress = "";
  mod3Progress = "";
  mod4Progress = "";
  mod5Progress = "";
  mod6Progress = "";
  mod1Number = 0;
  mod2Number = 0;
  mod3Number = 0;
  mod4Number = 0;
  mod5Number = 0;
  mod6Number = 0;
  mod1Open = false;
  mod2Open = false;
  mod3Open = false;
  mod4Open = false;
  mod5Open = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("token")!)
    console.log(user)
    let mod1Array = user!.progress[0].module1.progress;

    let numComplete = 0;
    for(let i = 0; i < mod1Array.length; i++){
      if(mod1Array[i] == 1){
        numComplete += 1;
      }
    }
    if(user!.progress[0].module2.progress[0] == 1){
      this.mod1Number = Math.round(((numComplete * 100) / mod1Array.length))
    }else{
      this.mod1Number = Math.round(((numComplete * 100) / mod1Array.length) - (100 / mod1Array.length))
    }
    console.log("LOOKIE")
    console.log(this.mod1Number)
    if(mod1Array[0] == 1){
      this.mod1Open = true;
    }
    console.log(this.mod1Number)
    this.mod1Progress = this.mod1Number + "%"
    console.log(user!.progress)
    let mod2Array = user!.progress[0].module2.progress;
    numComplete = 0;
    if(mod2Array[0] == 1){
      for(let i = 0; i < mod2Array.length; i++){
        if(mod2Array[i] == 1){
          numComplete += 1;
        }
      }
      if(user!.progress[0].module3.progress[0] == 1){
        this.mod2Number = Math.round(((numComplete * 100) / mod2Array.length))
      }else{
        this.mod2Number = Math.round(((numComplete * 100) / mod2Array.length) - (100 / mod2Array.length))
      }
      if(mod2Array[0] == 1){
        this.mod2Open = true;
      }    console.log(this.mod2Number)
      this.mod2Progress = this.mod2Number + "%"
    }
    let mod3Array = user!.progress[0].module3.progress;
    let mod4Array = user!.progress[0].module4.progress;
    let mod5Array = user!.progress[0].module5.progress;

    numComplete = 0;
    if(mod3Array[0] == 1){
      for(let i = 0; i < mod3Array.length; i++){
        if(mod3Array[i] == 1){
          numComplete += 1;
        }
      }
      if(user!.progress[0].module4.progress[0] == 1){
        this.mod3Number = Math.round(((numComplete * 100) / mod3Array.length))
      }else{
        this.mod3Number = Math.round(((numComplete * 100) / mod3Array.length) - (100 / mod3Array.length))
      }
      if(mod3Array[0] == 1){
        this.mod3Open = true;
      }
      this.mod3Progress = this.mod3Number + "%"
      
    }
    numComplete = 0;
    if(mod4Array[0] == 1){
    for(let i = 0; i < mod4Array.length; i++){
      if(mod4Array[i] == 1){
        numComplete += 1;
      }
    }
    if(user!.progress[0].module5.progress[0] == 1){
      this.mod4Number = Math.round(((numComplete * 100) / mod4Array.length))
    }else{
      this.mod4Number = Math.round(((numComplete * 100) / mod4Array.length) - (100 / mod4Array.length))
    }
    if(mod4Array[0] == 1){
      this.mod4Open = true;
    }    
    this.mod4Progress = this.mod4Number + "%"
  }
    console.log(this.mod4Number)
    numComplete = 0;
    if(mod5Array[0] == 1){
    for(let i = 0; i < mod5Array.length; i++){
      if(mod5Array[i] == 1){
        numComplete += 1;
      }
    }
    if(user!.complete == true){
      this.mod5Number = Math.round(((numComplete * 100) / mod4Array.length))
    }else{
      this.mod5Number = Math.round(((numComplete * 100) / mod4Array.length) - (100 / mod4Array.length))
    }
    if(mod5Array[0] == 1){
      this.mod5Open = true;
    }    this.mod5Progress = this.mod4Number + "%"
  }
    
  }

  async someFunc() {
    var something = await getUsers();
    console.log(await getUsers());
    console.log("Hi")

  }
  startModule1(): void{
    this.router.navigate(['/m1/module-1.1'])

  }
  startModule2(): void{
    this.router.navigate(['/m2/module-2.1'])

  }

  startModule3(): void{
    this.router.navigate(['/m3/module-3.1'])

  }
  mod1ProgressStyle = style({
      width: this.mod1Progress
  })
}

