import {AbstractControl, ValidationErrors, Validators} from '@angular/forms';

export function CustomEmailValidator(c: AbstractControl): ValidationErrors | null {
  const EMAIL_PATTERN: RegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const isInvalid: ValidationErrors | null = Validators.pattern(EMAIL_PATTERN)(c);

  return isInvalid ? {email: true} : null;
}
