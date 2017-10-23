import { Upload } from './upload';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class UploadService {

  basePath = "uploads";

  constructor(private db: AngularFireDatabase) {
    
   }

  pushUpload(upload: Upload){
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name + " - " + Date.now()}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot)=> {
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        upload.progress = (snap.bytesTransferred/ snap.totalBytes) * 100
      },
    (error) => {
      console.log(error)
    },
  ()=>{
    upload.url = uploadTask.snapshot.downloadURL;
    console.log("From service", upload.url)
    return undefined;
  })
  }


}
