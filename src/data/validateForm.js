export default function validateForm({ name, email }) {
  if (!name.trim()) {
    return "Username required";
  }
  // else if (!/^[A-Za-z]+/.test(name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  // const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  // const regex =
  //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // const regex =
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
  if (!email) {
    return "Email required";
  } else if (regex.test(email.toLocalLowerCase)) {
    return "Email address is invalid";
  }

  // if (!password) {
  //   return "Password is required";
  // } else if (password.length < 6) {
  //   return "Password needs to be 6 characters or more";
  // }

  // if (!confirmPass) {
  //   return "Enter Confirm password is required";
  // } else if (confirmPass !== password) {
  //   return "Passwords do not match";
  // }

  return null;
}
