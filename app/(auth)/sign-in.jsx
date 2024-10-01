import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useFormik } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { useRouter } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StatusBarComponent from "../../components/customStatusBar";
import images from "../../constants/images";
import Feather from "@expo/vector-icons/Feather";
import loginValidationSchema from "../../validations/LoginValidations";
import { loginUser } from "../../services/ApiCalls";
import { useAuth } from "../../context/AuthContext";

const SignIn = () => {
  const { setTokenInAsync } = useAuth();
  const router = useRouter();
  const [apiErr, setApiErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Check if the router has a valid history stack
    setCanGoBack(router.canGoBack());
  }, [router]);

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("password", values.password);
      const loginRes = await loginUser(formData);
      if (loginRes.status === 200) {
        await setTokenInAsync(loginRes.data.token);
        router.replace("/trends");
        resetForm();
      }
    } catch (error) {
      console.log(error.response.status);
      console.error(error);
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
    resetForm,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit,
  });
  return (
    <>
      <Spinner visible={isLoading} />
      <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
        <ScrollView className="bg-white flex-1">
          {canGoBack && (
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex flex-row items-center p-2"
            >
              <Feather name="chevron-left" size={24} color="black" />
              <Text className="font-sfsemibold text-[15px]">Back</Text>
            </TouchableOpacity>
          )}
          <KeyboardAwareScrollView>
            <View className="p-3 mt-[25%]">
              <View className="flex flex-col items-center justify-center">
                <Image
                  source={images.LogoImg}
                  className="w-[45px] h-[55px] m-4"
                  resizeMode="contain"
                />
                <View className="flex flex-col items-center gap-y-4 w-full">
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
                  {apiErr && (
                    <Text className=" text-center text-red-500 text-sm font-sfregular ">
                      {apiErr}
                    </Text>
                  )}
                </View>
              </View>
              <TouchableOpacity
                onPress={() => router.push("/forgot-pass")}
                className="w-full flex-row-reverse p-1 mt-1"
              >
                <Text className="font-sfregular text-[#707070] text-[15px]">
                  Forgot password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmit}
                className="bg-[#0A80FB] w-full items-center p-1 rounded-sm mt-4"
              >
                <Text className="font-sfsemibold text-white text-[15px]">
                  Sign <Text className="font-pcuregular font-medium">in</Text>
                </Text>
              </TouchableOpacity>
              <View className="flex flex-row self-start">
                <Text className="font-sfregular self-start p-2 text-[#707070] text-[15px]">
                  Don't have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/sign-up")}
                  className="flex flex-row items-center"
                >
                  <Text className="font-sfsemibold text-[#0A80FB]">
                    Sign <Text className="font-pcuregular font-normal">up</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
          <View className="flex items-center justify-center mt-[30px]">
            <View className="flex items-center justify-evenly flex-row w-full">
              <TouchableOpacity>
                <Text className="  text-[#707070] font-sfregular text-[12px]">
                  Privacy Policy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="  text-[#707070] font-sfregular text-[12px]">
                  Terms of Service
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </StatusBarComponent>
    </>
  );
};

export default SignIn;
