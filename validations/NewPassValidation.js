import * as Yup from "yup";

const newPassValidationSchema = Yup.object({
  password: Yup.string()
    .required("Password required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      "Password should be at least 8 characters long, must contain at least one uppercase letter, one lowercase letter, one number, and one special character,"
    )
    .min(8, "Password must be at least 8 characters"),

  confirmPassword: Yup.string()
    .required("Confirm Password required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default newPassValidationSchema;
