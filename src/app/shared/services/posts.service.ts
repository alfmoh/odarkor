import { Router } from '@angular/router';
import { Upload } from './upload';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class PostsService {

basePath = "images";
uploadTask;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private db: AngularFireDatabase) { }

create(article){
  return this.db.list("/heroes").push(article);
}

pushUploadWithImgUrl(upload: Upload, article,content){
  const storageRef = firebase.storage().ref();
  this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name + " - " + Date.now()}`).put(upload.file);

  this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot)=> {
      const snap = snapshot as firebase.storage.UploadTaskSnapshot
      upload.progress = (snap.bytesTransferred/ snap.totalBytes) * 100
    },
  (error) => {
    console.log(error)
  },
()=>{
  upload.url = this.uploadTask.snapshot.downloadURL;
  article.imgUrl = upload.url;
  this.create(article);
  this.open(content);
  
  return undefined;
})
}


open(content) {
    this.modalService.open(content).result.then((result) => {
      this.router.navigate(["/"]);
    }, (reason) => {
      this.router.navigate(["/"]);
    });
  }


}
