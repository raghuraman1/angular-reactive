import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe !== control.value;
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }
