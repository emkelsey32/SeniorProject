import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }
  get f() { return this.registerForm.controls; }
  registerAccount(): void {
    console.log(this.f['username'].value)
    console.log("calling properly")
    //console.log(e)

  }

}
