export default function validateFormMix({
  name,
  email,
  link,
  option,
  engineer,
}) {
  if (!name.trim()) {
    return "Name is required";
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
    return "Choose an option";
  }

  if (engineer === "Choose" || engineer === "") {
    return "Choose your engineer";
  }

  return null;
}
