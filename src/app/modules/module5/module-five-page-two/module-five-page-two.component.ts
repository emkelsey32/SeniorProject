import { Component, OnInit } from '@angular/core';
import { progressCourse } from 'src/API';
import { Router } from "@angular/router";
@Component({
  selector: 'app-module-five-page-two',
  templateUrl: './module-five-page-two.component.html',
  styleUrls: ['./module-five-page-two.component.scss']
})
export class ModuleFivePageTwoComponent implements OnInit {
  firstPage = 0;
  secondPage = 0;
  thirdPage = 0;
  fourthPage = 0;
  fifthPage = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("token")!);
    let mod1Progress = user.progress[0].module5.progress;
    this.firstPage = mod1Progress[0]
    this.secondPage = mod1Progress[1]
    this.thirdPage = mod1Progress[2]
    this.fourthPage = mod1Progress[3]
    this.fifthPage = mod1Progress[4]
    
  }

  async updatePage(module: number, page:number, reroutePage: string): Promise<void> {
    //call findOneAndUpdate
    console.log("here")
    let update = null;
      let user = JSON.parse(localStorage.getItem("token")!);
      let mod1Progress = user.progress[0].module5.progress;
      let sum1 = 0
      for(let i = 0; i < mod1Progress.length; i++){
          sum1 += mod1Progress[i];
      }
      
      console.log(user.progress)
      if(sum1 >2){
        update = mod1Progress;
      }else{
        update = {progress: [
          {module1:{
            progress: [1,1,1,1,1,1,1]},
          module2:{
            progress: [1,1,1,1,1]},
          module3:{
              progress: [1,1,1,1,1]},
            module4:{
                  progress: [1,1,1,1,1,1,1]
              },
            module5:{
              progress: [1,1,1,0,0,0,0]
            }}
        ]}
      console.log(update)
      let newUser = await progressCourse(user.username, update)
    localStorage.setItem("token", JSON.stringify(newUser))
    }
    this.router.navigate([reroutePage])

  }
}
