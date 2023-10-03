export default function validateFormMix({ name, email, link, option, mentor }) {
  if (!name.trim()) {
    return "Username required";
  }

  if (!email) {
    return "Email required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "Email address is invalid";
  }

  if (!link) {
    return "Link is required";
  }

  if (option === "Choose" || option === "") {
    return "Choose and option";
  }

  if (mentor === "Choose" || mentor === "") {
    return "Choose your mentor";
  }

  return null;
}
