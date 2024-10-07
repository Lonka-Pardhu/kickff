import * as Yup from "yup";

const changePassProfileValidationSchema = Yup.object({
  oldPassword: Yup.string().required("Old password required"),
  newPassword: Yup.string()
    .required("New password required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      "Password should be at least 8 characters long, must contain at least one uppercase letter, one lowercase letter, one number, and one special character,"
    )
    .min(8, "Password must be at least 8 characters"),
});

export default changePassProfileValidationSchema;
