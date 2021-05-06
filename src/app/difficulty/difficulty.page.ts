import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.page.html',
  styleUrls: ['./difficulty.page.scss'],
})
export class DifficultyPage implements OnInit {

  constructor(private router: Router) { }

  backPage(){
    this.router.navigate(['admin'])
  }
  
  jugarPage(){
    this.router.navigate(['individually'])
  }

  ngOnInit() {
  }

}
