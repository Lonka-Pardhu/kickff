import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  username: Yup.string()

    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+=\-{}\[\]:;"'<>,.?\/\\|~`]*$/,
      "Not a proper username"
    )
    .required("Username required"),
  password: Yup.string().required("Password required"),
});

export default loginValidationSchema;
