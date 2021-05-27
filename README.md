# Angular Forms Homework for Inventorsoft Academy

## Template driven form validation

**Email and password validation**:
For email validation I've used Angular built-in "email" and "required" properties. For password – "required" and "minlength/maxlength" properties, that prevent the password from being less than 6 characters.

**User validation errors**
Input validation checks whether the form is invalid (email "email" and "required" validators & password "required" and "minlength/maxlength" validators) and disables the submit button.

## Reactive form validation

**Username validation**:
I've included a custom validator using regex, that checks whether username contains both letters and numbers.

**Password validation**:
For reactive form I've included a custom validator that checks the password for lowercase & uppercase letters, and numbers. Error messages disappear only when both forms are validated.

## Styling

I've also included some styling on forms, that changes the appearance of buttons, inputs and fonts.
