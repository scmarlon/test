import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {

  constructor(private router: Router) { }

  backPage(){
    this.router.navigate(['admin'])
  }

  ngOnInit() {
  }

}
