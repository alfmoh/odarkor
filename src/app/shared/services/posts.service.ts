import { Hero } from '../models/hero';
import { UserService } from './user.service';
import { SubmissionDto, Submission } from './../models/submission';
import { Router } from '@angular/router';
import { Upload } from './upload';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class PostsService {

  basePath = "images";
  uploadTask;
  user;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private db: AngularFireDatabase,
    private submission: Submission,
    private submissionDto: SubmissionDto,
    private hero: Hero,
    userService: UserService,
    ) {
    userService.getUser().subscribe(user => this.user = user);
  }

  create(submission) {
    return this.db.list("/submissions").push(submission);
  }

  getSubmittedByUser(heroId) {
    return this.db.object("/submissions/" + heroId + "/submittedBy");
  }

  pushUploadWithImgUrl(submissionDto: SubmissionDto, modalBoxContent) {
    const storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${submissionDto.image[0].name + " - " + Date.now()}`).put(submissionDto.image[0]);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        submissionDto.progress = (snap.bytesTransferred / snap.totalBytes) * 100
      },
      (error) => {
        console.log(error)
      },
      () => {
        submissionDto.imageUrl = this.uploadTask.snapshot.downloadURL;

        this.submission.hero = {
          name : submissionDto.name,
          country: submissionDto.country,
          code: submissionDto.code,
          knownFor: submissionDto.knownFor,
          achievementDetails: submissionDto.achievementDetails,
          birthDate: submissionDto.birthDate,
          deathDate: submissionDto.deathDate,
          imageUrl: submissionDto.imageUrl
        }
        this.submission.submittedBy = this.user.displayName;
        this.create(this.submission);
        this.open(modalBoxContent);
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
