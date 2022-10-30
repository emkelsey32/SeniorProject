import { Component, OnInit } from '@angular/core';
import { progressCourse } from 'src/API';
import { Router } from "@angular/router";
@Component({
  selector: 'app-module-one-conceptual',
  templateUrl: './module-one-conceptual.component.html',
  styleUrls: ['./module-one-conceptual.component.scss']
})
export class ModuleOneConceptualComponent implements OnInit {
  firstPage = 0;
  secondPage = 0;
  thirdPage = 0;
  fourthPage = 0;
  fifthPage = 0;
  sixthPage = 0;
  seventhPage = 0;
  constructor(private router: Router) { }

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
  async updatePage(module: number, page:number, reroutePage: string): Promise<void> {
    //call findOneAndUpdate
    let update = null;
      let user = JSON.parse(localStorage.getItem("token")!);
      let mod1Progress = user.progress[0].module1.progress;
      let sum1 = 0
      for(let i = 0; i < mod1Progress.length; i++){
          sum1 += mod1Progress[i];
      }
      
      if(sum1 > 6){
        update = mod1Progress;
      }else{
      update = {progress: [
        {module1:{
          progress: [1,1,1,1,1,1,1]}},
          {module2:{
            progress: [0,0,0]}}
      ]}
      let newUser = await progressCourse(user.username, update)
    localStorage.setItem("token", JSON.stringify(newUser))
    }
    this.router.navigate([reroutePage])

  }
}

