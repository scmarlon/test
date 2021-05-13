import { RoomService } from './../services/room.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.page.html',
  styleUrls: ['./difficulty.page.scss'],
})
export class DifficultyPage implements OnInit {

  //listRooms = [];

  constructor(private router: Router, private creater: RoomService) { }

  backPage(){
    this.router.navigate(['admin'])
  }
  
  jugarPage(){
    this.router.navigate(['individually'])
  }

  invitarPage(){
    this.router.navigate(['multi-player'])
  }

  crearSala(){
    this.creater.createRoom()
  }

  getSalas(){
    //lsita = this.creater.
  }

  ngOnInit() {
  }

}
