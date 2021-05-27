import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent {
  form: FormGroup;
  get emailsFormArray(): FormArray {
    return this.form.get('emails') as FormArray;
  }
  constructor() {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        createUsernameValidator(),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        createPasswordValidator(),
      ]),
      emails: new FormArray([], [
        
      ]),
    });
  }

  addControl() {
    this.emailsFormArray.push(new FormControl(null, [
      Validators.email,
        Validators.required
    ]));
  }

  removeControl(index: number) {
    this.emailsFormArray.removeAt(index);
  }

  onSubmit() {
    alert('You have succesfully submitted the form!');
    this.form.reset();
    this.emailsFormArray.clear();
  }
}

export function createUsernameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasLetters = /[A-z]+/.test(value);

    const hasNumbers = /[0-9]+/.test(value);

    const usernameValid = hasLetters && hasNumbers;

    return !usernameValid ? { usernameStrength: true } : null;
  };
}

export function createPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasLowercase = /[a-z]+/.test(value);

    const hasUppercase = /[A-Z]+/.test(value);

    const hasNumbers = /[0-9]+/.test(value);

    const passwordValid = hasLowercase && hasUppercase && hasNumbers;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}
