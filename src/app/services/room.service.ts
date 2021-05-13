import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RoomService {


  constructor(  ) {  }

  createRoom(){
    var db = firebase.firestore();
    var user = JSON.parse(localStorage.getItem('userInformation'));
    db.collection('rooms').add({
      owner: { 
        owner: user.uid,
        name: user.displayName
      },
      players: [
        {playerId: user.uid, playerName: user.displayName}
      ]
    }).then(res =>{
      console.log(res);
    }).catch(ruta =>{
      console.log(ruta);
    });
  }

  // getSalas(){
  //   var db = firebase.firestore();

  //   var docRef = db.collection("users").get("uid");

  //   docRef.get("displayName").then((doc) => {
  //       if (doc.exists) {
  //           console.log("Document data:", doc.data());
  //       } else {
  //           // doc.data() will be undefined in this case
  //           console.log("No such document!");
  //       }
  //   }).catch((error) => {
  //       console.log("Error getting document:", error);
  //   });
    
  // }
}

