import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individually',
  templateUrl: './individually.page.html',
  styleUrls: ['./individually.page.scss'],
})
export class IndividuallyPage implements OnInit {

  constructor(private router: Router) {}

  backPage(){
    this.router.navigate(['admin'])
  }
  

  ngOnInit() {
  }

}
