import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class RoomService {


  constructor( private afs : AngularFirestore ) { }

  createRoom() {
    var user = JSON.parse(localStorage.getItem('userInformation'));
    this.afs.collection('rooms').add({
      owner: {
        owner: user.uid,
        name: user.displayName
      },
      players: [
        { playerId: user.uid, playerName: user.displayName }
      ]
    }).then(res => {
      console.log(res);
    }).catch(ruta => {
      console.log(ruta);
    });
  }


  async getRoom() {

    var roomGames = [];

    await this.afs.collection('rooms').get()
      .subscribe( snapshot => {
        snapshot.forEach(doc => {
          roomGames.push( doc.id )
        });
      });

    return roomGames;
  }

  async getUsers() {

    var usersGames = [];

    await this.afs.collection('users').get()
      .subscribe( snapshot => {
        snapshot.forEach(doc => {
          usersGames.push( doc.data() )
        });
      });

    return usersGames;
  }

  async addUserToRoom( idRoom, user ){
    await this.afs.collection('rooms').doc( idRoom ).update({
      players: firebase.firestore.FieldValue.arrayUnion({ user })
    })
  }

}

