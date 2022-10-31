import { Component, OnInit } from '@angular/core';
import { progressCourse } from 'src/API';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Animations init
    //new WOW().init();
  }

  async updatePage(module: number, page:number): Promise<void> {
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
    let newUser = await progressCourse(user.username, update)
    localStorage.setItem("token", JSON.stringify(newUser))
  }

}
