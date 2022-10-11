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
      return;
  }
    let a = await loginUser(this.f['username'].value, this.f['password'].value)
    localStorage.setItem("token", a);
    console.log("calling properly")
    this.router.navigate(['/'])
    //console.log(e)

  }

}
