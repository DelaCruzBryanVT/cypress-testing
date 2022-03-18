import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cypress-test';

  constructor(private _router: Router) { }
  
  ngOnInit(): void {
    if (localStorage.getItem('sessionData')) {
      this._router.navigate(['/contacts']);
    }
    else {
      this._router.navigate(['/']);
    }
  }
}
