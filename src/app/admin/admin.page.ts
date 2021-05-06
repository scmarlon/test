import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  

  constructor(private router: Router) { }

  myAction(){
    this.router.navigate(['login'])
  }

  iniciarPage(){
    this.router.navigate(['difficulty'])
  }

  languagesPage(){
    this.router.navigate(['languages'])
  }

  instructionsPage(){
    this.router.navigate(['instructions'])
  }

  ngOnInit() {
  }

}
