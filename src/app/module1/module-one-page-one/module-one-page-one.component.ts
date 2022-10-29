import { Component, OnInit } from '@angular/core';
import { progressCourse } from 'src/API';
import { Router } from "@angular/router";
@Component({
  selector: 'app-module-one-page-one',
  templateUrl: './module-one-page-one.component.html',
  styleUrls: ['./module-one-page-one.component.scss']
})
export class ModuleOnePageOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    
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
      
      if(sum1 > 2){
        update = mod1Progress;
      }else{
      update = {progress: [
        {module1:{
          progress: [1,1,0,0,0,0,0]}},
          {module2:{
            progress: [0,0,0]}}
      ]}
      let newUser = await progressCourse(user.username, update)
    localStorage.setItem("token", JSON.stringify(newUser))
    }
    this.router.navigate([reroutePage])

    
  }
}
