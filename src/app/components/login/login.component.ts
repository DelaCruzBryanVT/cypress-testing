import { UserClass } from './../../models/user-model-class';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.initForm();

    var user = localStorage.getItem('sessionData');

    console.log(user);
    
    
  }

   login(): void{

    let formData = {
      user: this.formLogin.value.user,
      password: this.formLogin.value.password,
    }

    let user = new UserClass(formData.user, formData.password)

    localStorage.setItem('sessionData', JSON.stringify(formData));

    console.log('ir a contacts')
    this._router.navigate(['/contacts']);
   
  }

  private initForm(){

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
