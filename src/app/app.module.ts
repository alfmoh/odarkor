import { ModeratorModule } from './moderator/moderator.module';
import { NotfoundComponent } from './others/components/notfound/notfound.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { OthersModule } from './others/others.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    OthersModule,
    ModeratorModule,
    RouterModule.forRoot([
      {path: "404", component: NotfoundComponent},   
      {path: '**', redirectTo: '404'}
    ]),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
