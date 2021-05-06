import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {

  constructor(private router: Router) { }
  
  backPage(){
    this.router.navigate(['admin'])
  }
  ngOnInit() {
  }

}
