import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../../../app/confirmed.validator';
import { resetPassword } from 'src/API';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  passwordForm: FormGroup = new FormGroup({});
  submitted = false;
  validForm = true;

  githubUrl = "";
  firstName = "";
  user = JSON.parse(localStorage.getItem("token")!);

  avatarSrc = "https://avatars.dicebear.com/api/bottts/:{{firstname}}.svg"

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.firstName = (this.user!.firstName)

    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirm_password: ['', Validators.required] //need to check that both match!!
  });

  }
  get f() { return this.passwordForm.controls; }

  async resetPassword(): Promise<void> {
    this.submitted = true;
    this.validForm = true;
    let token;
    if (this.passwordForm.invalid) {
      this.validForm = false
      return;
    }

    if(this.passwordForm.value.password != this.passwordForm.value.confirm_password){
      this.validForm = false
      return;
    }
    let user = JSON.parse(localStorage.getItem("token")!);

    let newUser = await resetPassword(user.username, this.passwordForm.value.password)
    //console.log(newUser)
    localStorage.setItem("token", JSON.stringify(newUser))

    this.validForm = true;
    console.log("password reset")
    this.router.navigate(["/profile-page"])
  }
}
