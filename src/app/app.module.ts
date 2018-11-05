import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileEditorFBComponent } from './profile-editor-fb/profile-editor-fb.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ProfileEditorFBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
