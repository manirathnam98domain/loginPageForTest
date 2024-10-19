import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PasswordMismatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmpassword = control.get('confirmPassword');

  if (!password || !confirmpassword) {
    return null;
  }
  return password.value === confirmpassword.value
    ? null
    : { passwordMismatch: true };
};
