export const validateForm = (email, password) => {
  switch (true) {
    case email === "":
      return "Please fill out all fields";
    case password === "":
      return "Please fill out all fields";
    case password.length < 6:
      return "Password must be at least 6 characters";
    case password.search(/[a-z]/i) < 0:
      return "Password must contain at least one letter";
    case password.search(/[0-9]/) < 0:
      return "Password must contain at least one digit";
    case password.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) < 0:
      return "Password must contain at least one special character";
    case password.search(/[\s]/) >= 0:
      return "Password must not contain any spaces";
    case email.search(/@/) < 0:
      return "Email must contain @";
    case email.search(/@/) !== email.lastIndexOf("@"):
      return "Email must contain only one @";
    case email.search(/\./) < 0:
      return "Email must contain .";
    case email.search(/\./) === email.length - 1:
      return "Email must not end with .";
    case email.search(/@/) === 0:
      return "Email must not start with @";
    case email.search(/\./) === 0:
      return "Email must not start with .";
    case email.search(/\s/) >= 0:
      return "Email must not contain any spaces";
    default:
      return true;
  }
};