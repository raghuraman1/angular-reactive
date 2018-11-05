import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';

@Component({
  selector: 'app-profile-editor-fb',
  templateUrl: './profile-editor-fb.component.html',
  styleUrls: ['./profile-editor-fb.component.css']
})
export class ProfileEditorFBComponent implements OnInit {
  controlFieldCtrl = this.fb.control('', Validators.required);

  profileForm = this.fb.group({
    controlField: this.controlFieldCtrl,
    firstName: ['', Validators.required],
    lastName: ['', forbiddenNameValidator('bob')],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.controlFieldCtrl.statusChanges.subscribe((value: string) => {
this.enableDisable();
    });
    this.enableDisable();
  }

  

get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}

enableDisable()
{
  if(this.controlFieldCtrl.valid)
  {
   this.profileForm.controls.firstName.enable();
  }
  else
  {
    this.profileForm.controls.firstName.disable();
  }
}
addAlias() {
  this.aliases.push(this.fb.control(''));
}

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}

isFieldValid(field: string) {
  return !this.profileForm.get(field).valid;
}

/* what about this */
displayFieldCss(field: string) {
  return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
  };
}


updateProfile() {
  this.profileForm.patchValue({
    firstName: 'Nancy',
    lastName: 'bob',
    address: {
      street: '123 Drew Street'
    }
  });
}
}
