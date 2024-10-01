import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import StatusBarComponent from "../../components/customStatusBar";
import Feather from "@expo/vector-icons/Feather";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../constants/images";
import { useLocalSearchParams, useRouter } from "expo-router";
import newPassValidationSchema from "../../validations/NewPassValidation";
import { useFormik } from "formik";
import { setNewPass } from "../../services/ApiCalls";
import GreenVerifiedSvg from "../../assets/svg/VerifiedIcon";
const NewPass = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [apiErr, setApiErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tokenFromOtpVerificaion, setTokenFromOtpVerification] =
    useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (params && params.token) {
      setTokenFromOtpVerification(params.token);
    }
  }, []);

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("password", values.password);
      formData.append("password_confirmation", values.confirmPassword);
      const setNewPassRes = await setNewPass(formData, tokenFromOtpVerificaion);
      if (setNewPassRes.status === 200) {
        // console.log(setNewPassRes);
        router.replace("/sign-in");
        resetForm();
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
    resetForm,
  } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: newPassValidationSchema,
    onSubmit,
  });
  return (
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
              {/* <Image
                source={images.FingerprintImg}
                className="w-[40px] h-[40px] mb-1"
                resizeMode="contain"
              /> */}

              <Text className="font-sfbold text-4xl text-[#0A80FB]">****</Text>
              <Text className="font-sfsemibold text-lg">Set new password</Text>
              <Text className="font-sfregular text-md text-[#707070]">
                Must be atleast 8 characters.
              </Text>
            </View>
            <View className="flex flex-col items-center gap-y-4 w-full mt-2">
              <View className="w-full">
                <TextInput
                  keyboardType="password"
                  onChangeText={(e) => {
                    setApiErr("");
                    handleChange("password")(e);
                  }}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <Text className="self-start text-red-500 text-sm font-sfregular ">
                    {errors.password}
                  </Text>
                )}
              </View>
              <View className="w-full">
                <TextInput
                  keyboardType="confirmPassword"
                  onChangeText={(e) => {
                    setApiErr("");
                    handleChange("confirmPassword")(e);
                  }}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                  placeholder="Confirm password"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text className="self-start text-red-500 text-sm font-sfregular ">
                    {errors.confirmPassword}
                  </Text>
                )}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              className="bg-[#0A80FB] w-full  p-2 rounded-sm mt-4"
            >
              <View className="flex flex-row justify-center items-center">
                <Text className="font-sfsemibold text-white text-[15px]">
                  Set
                </Text>
                <Text className="font-pcuregular text-white leading-[25px]">
                  {" "}
                  new{" "}
                </Text>
                <Text className="font-sfsemibold text-white text-[15px]">
                  password
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Modal visible={true} animationType={"fade"} transparent={true}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "rgba(52, 52, 52, 0.8)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View className="items-center bg-white width-[90%] mx-3 my-[60px] rounded-xl ">
                  <View style={{ alignItems: "center", margin: 10 }}>
                    <GreenVerifiedSvg />
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => dismissAlert(false)}
                    style={{
                      width: "95%",
                      borderRadius: 0,
                      alignItems: "center",
                      justifyContent: "center",

                      backgroundColor: "blue",
                      borderColor: "#ddd",
                      borderBottomWidth: 0,
                      borderRadius: 5,
                      bottom: 0,
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ color: "white", margin: 15 }}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </StatusBarComponent>
  );
};

export default NewPass;
