import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { changeProfile } from 'src/API';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.scss']
})
export class EditUserInfoComponent {
  editForm: FormGroup = new FormGroup({});
  submitted = false;
  validForm = true;

  githubUrl = "";
  firstName = "";
  lastName = "";
  username = "";
  email = "";

  user = JSON.parse(localStorage.getItem("token")!);

  avatarSrc = "https://avatars.dicebear.com/api/bottts/:{{firstname}}.svg"

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.firstName = (this.user!.firstName);
    this.lastName = (this.user!.lastName);
    this.email = (this.user!.email);


    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],      
      email: ['', Validators.required]
  });

  }
  get f() { return this.editForm.controls; }

  async editUserInfo(): Promise<void> { //check that things are actually validated and modified in the database!
    this.submitted = true;
    this.validForm = true;
    let token;
    if (this.editForm.invalid) {
      return;
    }
    let user = JSON.parse(localStorage.getItem("token")!);

    console.log(this.editForm.value)
    this.validForm = true;
    let newUser = await changeProfile(user.username, this.editForm.value)
    console.log(newUser)
    localStorage.setItem("token", JSON.stringify(newUser));
    console.log("User Info Edited!")
    this.router.navigate(["/profile-page"])
  }
}