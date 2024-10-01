import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import StatusBarComponent from "../../components/customStatusBar";
import Feather from "@expo/vector-icons/Feather";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../constants/images";
import { useRouter } from "expo-router";
import forgotPassValidationSchema from "../../validations/ForgotPass";
import { forgotPass } from "../../services/ApiCalls";
import { useFormik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";

const ForgotPass = () => {
  const router = useRouter();
  const [apiErr, setApiErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("email", values.email);

      const forgotPassRes = await forgotPass(formData);
      if (forgotPassRes.status === 200) {
        // console.log(signUpRes);
        router.push({
          pathname: "/verify-otp",
          params: { email: values.email, fromForgotPass: true },
        });
        resetForm();
      }
    } catch (error) {
      // console.log(error.response.data);
      setApiErr(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPassValidationSchema,
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
                  source={images.FingerprintImg}
                  className="w-[40px] h-[40px] mb-1"
                  resizeMode="contain"
                />
                <Text className="font-sfsemibold text-lg">
                  Forgot password?
                </Text>
                <Text className="font-sfregular text-md text-[#707070]">
                  No worries, we’ll send you reset instructions.
                </Text>
              </View>
              <View className="flex flex-col items-center gap-y-4 w-full mt-2">
                <View className="w-full">
                  <TextInput
                    onChangeText={(e) => {
                      setApiErr("");
                      handleChange("email")(e);
                    }}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email"
                    className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                    placeholder="Email"
                  />
                  {errors.email && touched.email && (
                    <Text className="self-start text-red-500 text-sm font-sfregular ">
                      {errors.email}
                    </Text>
                  )}
                </View>
              </View>
              {apiErr && (
                <Text className=" text-center my-2 text-red-500 text-sm font-sfregular ">
                  {apiErr}
                </Text>
              )}
              <TouchableOpacity
                onPress={handleSubmit}
                className="bg-[#0A80FB] w-full items-center p-1 rounded-sm mt-4"
              >
                <Text className="font-sfsemibold text-white text-[15px]">
                  Reset
                  <Text className="font-pcuregular font-medium">password</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </StatusBarComponent>
    </>
  );
};

export default ForgotPass;
