import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { createUser } from 'src/API';
import { Router } from "@angular/router";
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }
  get f() { return this.registerForm.controls; }
  async registerAccount(): Promise<void> {
    this.submitted = true;
    let token;
    if (this.registerForm.invalid) {
      return;
  }
    let a = await createUser(this.f['firstName'].value, this.f['lastName'].value, this.f['username'].value, this.f['password'].value, this.f['email'].value)
    localStorage.setItem("token", JSON.stringify(a));
    console.log("calling properly")
    //console.log(e)

  }

}
