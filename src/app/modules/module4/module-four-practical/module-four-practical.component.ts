import { Component, OnInit } from '@angular/core';
import { progressCourse } from 'src/API';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-module-four-practical',
  templateUrl: './module-four-practical.component.html',
  styleUrls: ['./module-four-practical.component.scss']
})
export class ModuleFourPracticalComponent implements OnInit {
  registerForm!: FormGroup;

  firstPage = 0;
  secondPage = 0;
  thirdPage = 0;
  fourthPage = 0;
  fifthPage = 0;
  sixthPage = 0;
  seventhPage = 0;
  submitted = false;
  githubAdded = true;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("token")!);
    let mod1Progress = user.progress[0].module1.progress;
    this.firstPage = mod1Progress[0]
    this.secondPage = mod1Progress[1]
    this.thirdPage = mod1Progress[2]
    this.fourthPage = mod1Progress[3]
    this.fifthPage = mod1Progress[4]

    this.registerForm = this.formBuilder.group({
      github: ['', Validators.required]
  });
    
  }
  get f() { return this.registerForm.controls; }
  async addGitHubAccount(){
    this.submitted = true;
    this.githubAdded = false;
    console.log(this.f['github'].value)
    let user = JSON.parse(localStorage.getItem("token")!);
    let newUser = await progressCourse(user.username, {github: this.f['github'].value})
    localStorage.setItem("token", JSON.stringify(newUser))
    return;
  }

  async updatePage(module: number, page:number, reroutePage: string): Promise<void> {
    //call findOneAndUpdate
    console.log("here")
    let update = null;
      let user = JSON.parse(localStorage.getItem("token")!);
      let mod1Progress = user.progress[0].module2.progress;
      let sum1 = 0
      for(let i = 0; i < mod1Progress.length; i++){
          sum1 += mod1Progress[i];
      }
      
      console.log(user.progress)
      if(sum1 >6){
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
              progress: [1,0,0,0,0,0,0]
            }}
        ]}
      
      console.log(update)
      let newUser = await progressCourse(user.username, update)
    localStorage.setItem("token", JSON.stringify(newUser))
    }
    this.router.navigate([reroutePage])

  }
}
