import { UserClass } from './../../models/user-model-class';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {
  formLogin!: FormGroup;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.initForm();
   
  }

  ngAfterViewInit() {
    
  }

  login(): void {
    let formData = {
      user: this.formLogin.value.user,
      password: this.formLogin.value.password,
    }
    let user = new UserClass(formData.user, formData.password)
    localStorage.setItem('sessionData', JSON.stringify(formData));
    this._router.navigate(['/contacts']);

  }

  private initForm() {

    this.formLogin = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.pattern("^.{4,}$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern("^.{4,}$")
      ]),

    });
  }

}
