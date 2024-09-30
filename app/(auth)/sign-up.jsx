import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import StatusBarComponent from "../../components/customStatusBar";
import Feather from "@expo/vector-icons/Feather";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../constants/images";
import { useRouter } from "expo-router";
import { useFormik } from "formik";
import signUpValidationSchema from "../../validations/SignUpValidation";
import { signUpUser } from "../../services/ApiCalls";
import Spinner from "react-native-loading-spinner-overlay";

const SignUp = () => {
  const router = useRouter();
  const [apiErr, setApiErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("first_name", values.firstName);
      formData.append("last_name", values.lastName);
      formData.append("username", values.username);
      formData.append("email", values.email);
      formData.append("password", values.password);
      const signUpRes = await signUpUser(formData);
      if (signUpRes.status === 200) {
        console.log(signUpRes);
        router.push({
          pathname: "/verify-otp",
          params: { email: values.email },
        });
      }
    } catch (error) {
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
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: signUpValidationSchema,
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
            <View className="p-3 flex-1">
              <View className="flex flex-col items-center justify-center">
                <Image
                  source={images.LogoImg}
                  className="w-[45px] h-[55px] m-4"
                  resizeMode="contain"
                />
                <Text className="font-sfregular px-4 text-[#999999]">
                  Create an account and enjoy best rated picks ,articles,
                  trending strories and more.
                </Text>
                {apiErr && (
                  <Text className=" text-center mt-2 text-red-500 text-sm font-sfregular ">
                    {apiErr}
                  </Text>
                )}
                <View className="flex flex-col items-center gap-y-4 w-full mt-2">
                  <View className="w-full">
                    <TextInput
                      onChangeText={(e) => {
                        setApiErr("");
                        const newText = e.replace(/[^a-zA-Z]/g, "");
                        setFieldValue("firstName", newText);
                        handleChange("firstName");
                      }}
                      onBlur={handleBlur("firstName")}
                      value={values.firstName}
                      className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                      placeholder="First Name"
                    />
                    {errors.firstName && touched.firstName && (
                      <Text className="self-start text-red-500 text-sm font-sfregular ">
                        {errors.firstName}
                      </Text>
                    )}
                  </View>
                  <View className="w-full">
                    <TextInput
                      onChangeText={(e) => {
                        setApiErr("");
                        const newText = e.replace(/[^a-zA-Z]/g, "");
                        setFieldValue("lastName", newText);
                        handleChange("lastName");
                      }}
                      onBlur={handleBlur("lastName")}
                      value={values.lastName}
                      className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                      placeholder="Last Name"
                    />
                    {errors.lastName && touched.lastName && (
                      <Text className="self-start text-red-500 text-sm font-sfregular ">
                        {errors.lastName}
                      </Text>
                    )}
                  </View>
                  <View className="w-full">
                    <TextInput
                      onChangeText={(e) => {
                        setApiErr("");
                        const newText = e.replace(/\s/g, "");
                        setFieldValue("username", newText);
                        handleChange("username");
                      }}
                      onBlur={handleBlur("username")}
                      value={values.username}
                      className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                      placeholder="Username"
                    />
                    {errors.username && touched.username && (
                      <Text className="self-start text-red-500 text-sm font-sfregular ">
                        {errors.username}
                      </Text>
                    )}
                  </View>
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
                  <View className="w-full">
                    <View className="flex flex-row items-center w-full">
                      <TextInput
                        secureTextEntry={hidePass ? true : false}
                        onChangeText={(e) => {
                          setApiErr("");
                          handleChange("password")(e);
                        }}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-l-sm flex-1"
                        placeholder="Password"
                      />
                      <Text
                        onPress={() => setHidePass(!hidePass)}
                        className={`bg-[#f2f2f2] px-2 py-3 text-sm font-sfregular rounded-r-sm ${
                          hidePass ? "text-green-500" : "text-red-500"
                        } `}
                      >
                        {hidePass ? "Show" : "Hide"}
                      </Text>
                    </View>
                    {errors.password && touched.password && (
                      <Text className="self-start text-red-500 text-sm font-sfregular ">
                        {errors.password}
                      </Text>
                    )}
                  </View>
                  <Text className="font-sfregular text-[12px] text-[#999999]">
                    Your password must be between 8 and 30 characters.
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                className="bg-[#0A80FB] w-full items-center p-1 rounded-sm mt-4"
              >
                <Text className="font-sfsemibold text-white text-[15px]">
                  Sign <Text className="font-pcuregular font-medium">up</Text>
                </Text>
              </TouchableOpacity>
              <View className="mt-[10%]">
                <Text className="font-sfregular text-[12px] text-center">
                  By signing up your agree to our
                  <Text className="text-[#0A80FB]"> Terms & Conditions</Text>
                </Text>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </StatusBarComponent>
    </>
  );
};

export default SignUp;
