import * as Yup from "yup";

const verifyEmailOtp = Yup.object({
  otp: Yup.string()
    .required("OTP is required") // Required field
    .matches(/^\d{4}$/, "OTP must be exactly 4 digits"),
});

export default verifyEmailOtp;
