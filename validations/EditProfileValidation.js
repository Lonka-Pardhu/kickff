import * as Yup from "yup";

const editProfileValidationSchema = Yup.object({
  firstName: Yup.string().required("First name required"),
  // lastName: Yup.string().required("Last name required"),
  username: Yup.string().required("username required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .matches(
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
      "Not a proper email"
    )
    .required("Email required"),
});

export default editProfileValidationSchema;
