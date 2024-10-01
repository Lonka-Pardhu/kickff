import * as Yup from "yup";

const signUpValidationSchema = Yup.object({
  firstName: Yup.string().required("First name required"),
  lastName: Yup.string().required("Last name required"),
  username: Yup.string().required("username required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .matches(
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
      "Not a proper email"
    )
    .required("Email required"),
  password: Yup.string()
    .required("Password required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      "Password should be at least 8 characters long, must contain at least one uppercase letter, one lowercase letter, one number, and one special character,"
    )
    .min(8, "Password must be at least 8 characters"),
});

export default signUpValidationSchema;
