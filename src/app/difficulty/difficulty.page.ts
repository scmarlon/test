import { RoomService } from './../services/room.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.page.html',
  styleUrls: ['./difficulty.page.scss'],
})
export class DifficultyPage implements OnInit {

  roomList = [];
  usersList = [];
  selectedRoom;
  selectedUser;

  constructor(private router: Router, private creater: RoomService) { }


  
  async ngOnInit() {
    this.getSalas();
    await this.getUsuarios()
  }

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
    this.getSalas();

  }

  async getSalas(){
     this.creater.getRoom().then(res => {
       this.roomList = res; 
     }) 
  }

  async getUsuarios(){
    this.creater.getUsers().then( users => {
      this.usersList = users
      
    });
  }

  agregarJugador(){
    this.creater.addUserToRoom( this.selectedRoom,this.selectedUser );
  }


}
