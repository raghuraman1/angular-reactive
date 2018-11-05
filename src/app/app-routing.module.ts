import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileEditorFBComponent } from './profile-editor-fb/profile-editor-fb.component';

const routes: Routes = [
  {path : 'welcome', component : WelcomeComponent },
  {path : 'name-editor', component : NameEditorComponent},
  {path : 'profile-editor', component : ProfileEditorComponent},
  {path : 'profile-editor-fb', component : ProfileEditorFBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
