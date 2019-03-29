import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';

@Component({
  selector: 'app-profile-editor-fb',
  templateUrl: './profile-editor-fb.component.html',
  styleUrls: ['./profile-editor-fb.component.css']
})
export class ProfileEditorFBComponent implements OnInit {
  treatAsMultiple =false;
  controlFieldCtrl = this.fb.control('', Validators.required);

  profileForm = this.fb.group({
    controlField: this.controlFieldCtrl,
    firstName: ['', Validators.required],
    lastName: ['', forbiddenNameValidator('bob')],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      country: [''],
      zip: ['', [Validators.required, Validators.pattern(/^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/)]]
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  
 

  countryNames = ['USA', 'Other', 'India'];
  constructor(private fb: FormBuilder) { }
  get address(): FormGroup {
    return this.profileForm.get('address') as FormGroup;
}

isMultiple()
{
  return this.treatAsMultiple;
}
  ngOnInit() {
   
    let addressFG: FormGroup= this.profileForm.get('address') as FormGroup;
    this.controlFieldCtrl.statusChanges.subscribe((value: string) => {
this.enableDisable();
    });
    
    addressFG.controls.country.valueChanges.subscribe((value : string)=>{
      this.onChangeOfCountry(value);
    });
    this.enableDisable();
    
    
  }

  

get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}

onChangeOfCountry(value: string)
{
  console.log('value='+value);
  let addressFG: FormGroup= this.profileForm.get('address') as FormGroup;
  if(value.indexOf('USA')!==-1)
  {
console.log('is usa');
this.treatAsMultiple=false;


  }
  else
  {
    console.log('is not usa');
    this.treatAsMultiple=true;
  }

  let zipFG : FormGroup =this.profileForm.get('zip') as FormGroup;
  /*if(value === 'USA')
  {
    //can also patch value for fields
    zipFG.setValidators([Validators.required, Validators.pattern(/^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/)]);
  }
  else{
    zipFG.setValidators([Validators.required]);
  }
  zipFG.updateValueAndValidity();*/
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
