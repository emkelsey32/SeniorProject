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
    if(module == 1){
      update = {progress: [
        {module1:{
          progress: [1,1,0]}}
      ]}
    }else if(module == 2){

    }else if(module == 3){
      
    }else if(module == 4){
      
    }else if(module == 5){
      
    }else if(module == 6){
      
    }
    const user = JSON.parse(localStorage.getItem("token")!)
    console.log(user.username)
    let newUser = await progressCourse(user.username, update)
    localStorage.setItem("token", JSON.stringify(newUser))
    this.router.navigate([reroutePage])
  }
}
