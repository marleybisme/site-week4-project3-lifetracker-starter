









// - [ ] Build the **`RegistrationForm`** component to:
//   - [ ] Render JSX that is wrapped by an element with the class name of `registration-form`
//   - [ ] Should render an input element for the following fields:
//     - [ ] `email`
//     - [ ] `username`
//     - [ ] `firstName`
//     - [ ] `lastName`
//     - [ ] `password`
//     - [ ] `passwordConfirm`
//   - [ ] Each `input` element in the form should have a class name of `form-input` and should have the following props set:
//     - [ ] `name` - the `name` of the `input` field being rendered (`email`, `username`, `firstName`, `lastName`, `password`, `passwordConfirm`)
//     - [ ] `type` - the type of the `input` element (`text`, `email`, `number`, etc.)
//     - [ ] `value` - the current value of the `input` element
//     - [ ] `onChange` - the `onChange` handler function
//   - [ ] Validate the `email` field: If the user has entered text into the `email` field and it doesn't contain an `@` symbol, then an error message should be displayed in an element with the class name of `error` indicating that the entry is not a valid email.
//   - [ ] Validate the `password` and `passwordConfirm` fields: If the user has entered text into the `password` and `passwordConfirm` fields and they don't match, then a message should be displayed in an element with the `className` of `error` with a message that contains the text: `passwords don't match`
//   - [ ] Gracefully handle errors:
//     - [ ] If the user has attempted to login and gotten a `401` error, then the `errors` object should contain a `form` property that contains a message indicating that the `email` and `password` combination is incorrect.
//     - [ ] If the user has attempted to login and gotten a `400` or `422` error, then the `errors` object should contain a `form` property that contains a message indicating what went wrong.
//   - [ ] There should be a `button` element with the `className` of `submit-registration`:
//     - [ ] It should contain the text `"Create Account"`
//     - [ ] When clicked, it should call the `signupUser` function