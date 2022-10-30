import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { loginUser } from 'src/API';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  signInForm!: FormGroup;
  submitted = false;
  validForm = true;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.signInForm.controls; }
  async signIn(): Promise<void> {
    this.submitted = true;
    let token;
    if (this.signInForm.invalid) {
      this.validForm = false;
      return;
  }
    console.log(this.f['username'].value)
    let a = await loginUser(this.f['username'].value, this.f['password'].value)
    if(JSON.parse(JSON.stringify(a))._id == undefined){
      this.validForm = false;
      console.log("inside!")
      return;
    }
    localStorage.setItem("token", JSON.stringify(a));
    console.log("calling properly")
    this.router.navigate(['/landing-page'])
    //console.log(e)

  }

}
