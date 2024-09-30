import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import StatusBarComponent from "../../components/customStatusBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../constants/images";
import Feather from "@expo/vector-icons/Feather";
import { OtpInput } from "react-native-otp-entry";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useFormik } from "formik";
import verifyEmailOtp from "../../validations/verifyEmailOtp";
import { useAuth } from "../../context/AuthContext";
import { sendEmailVerificationOtp, verifyEmail } from "../../services/ApiCalls";
import Spinner from "react-native-loading-spinner-overlay";

const VerifyOtp = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { setTokenInAsync } = useAuth();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [apiErr, setApiErr] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resentOtpMsg, setResentOtpMsg] = useState(false);

  useEffect(() => {
    if (params && params.email) {
      setEmail(params.email);
      console.log(params.email);
    }
  }, []);

  const resendEmailOtp = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("email", email);
      const resendRes = await sendEmailVerificationOtp(formData);
      console.log(resendRes);
      if (resendRes.status === 200) {
        console.log("OTP sent to email");
        setResentOtpMsg(true); // Show the message
        setTimeout(() => {
          setResentOtpMsg(false); // Hide the message after 5 seconds
        }, 5000);
      }
    } catch (error) {
      console.log("ERRRR>>>>", error.response);
      console.log(error.response.data.error);
      setApiErr(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values) => {
    console.log(values);
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", values.otp);
      const verifyOtpRes = await verifyEmail(formData);
      if (verifyOtpRes.status === 200) {
        await setTokenInAsync(verifyOtpRes.data.token);
        Alert.alert("Email verified Successfully", "", [
          {
            text: "Ok",
            onPress: () => router.replace("/trends"),
          },
        ]);
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.error);
      setHasError(true);
      setApiErr(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        otp: "",
      },
      validationSchema: verifyEmailOtp,
      onSubmit,
    });

  return (
    <>
      <Spinner visible={isLoading} />
      <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
        <ScrollView className="bg-white flex-1">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex flex-row items-center p-2"
          >
            <Feather name="chevron-left" size={24} color="black" />
            <Text className="font-sfsemibold text-[15px]">Back</Text>
          </TouchableOpacity>
          <KeyboardAwareScrollView>
            <View className="p-3 mt-[25%]">
              <View className="flex flex-col items-center justify-center ">
                <Image
                  source={images.emailImg}
                  className="w-[40px] h-[40px] mb-1"
                  resizeMode="contain"
                />
                <Text className="font-sfsemibold text-lg">Enter your code</Text>
                <Text className="font-sfregular text-md text-[#707070]">
                  We sent a code to{" "}
                  <Text className="text-black font-semibold">{email}</Text>
                </Text>
                {resentOtpMsg && (
                  <Text className="text-green-500 text-center text-sm mb-2">
                    OTP has been sent to your email!
                  </Text>
                )}
              </View>
              <View>
                <View className=" flex flex-row items-center justify-center mt-4">
                  <OtpInput
                    className="font-sfregular"
                    numberOfDigits={4}
                    onTextChange={(text) => {
                      setOtp(text);
                      setHasError(false);
                      handleChange("otp")(text);
                    }}
                    value={values.otp}
                    onBlur={handleBlur("otp")}
                    type="numeric"
                    theme={{
                      containerStyle: {
                        borderRadius: 5,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                      },
                      pinCodeContainerStyle: {
                        borderRadius: 2,
                        borderColor: hasError ? "red" : "#c2c2c2",
                        height: 50,
                        width: 50,
                        backgroundColor: "#f2f2f2",
                      },
                    }}
                  />
                </View>
                {errors.otp && touched.otp && (
                  <Text className="text-center mt-4 text-red-500 text-sm font-sfregular ">
                    {errors.otp}
                  </Text>
                )}
                {apiErr && (
                  <Text className="text-center mt-4 text-red-500 text-sm font-sfregular ">
                    {apiErr}
                  </Text>
                )}
              </View>
              <View className="flex items-center flex-row justify-center m-2">
                <Text className="font-sfregular text-md text-[#707070]">
                  Didn't recieve the email ?{" "}
                </Text>
                <TouchableOpacity onPress={() => resendEmailOtp()}>
                  <Text className="text-[#31C163] font-sfsemibold">
                    Click to resend
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                className="bg-[#0A80FB] w-full items-center p-2 rounded-sm mt-2"
              >
                <Text className="font-sfsemibold text-white text-[15px]">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </StatusBarComponent>
    </>
  );
};

export default VerifyOtp;
