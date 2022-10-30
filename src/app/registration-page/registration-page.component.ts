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
  validForm = true;
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
    this.validForm = true;
    let token;
    if (this.registerForm.invalid) {
      return;
    }
    let a = await createUser(this.f['firstName'].value, this.f['lastName'].value, this.f['username'].value, this.f['password'].value, this.f['email'].value)
    console.log(JSON.parse(JSON.stringify(a)))
    if(JSON.parse(JSON.stringify(a))._id == undefined){
      this.validForm = false;
      console.log("inside!")
      return;
    }
    this.validForm = true;
    localStorage.setItem("token", JSON.stringify(a));
    console.log("calling properly")
    this.router.navigate(["/landing-page"])

    //console.log(e)

  }

}
