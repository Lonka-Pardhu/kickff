import React, { useEffect, useState } from "react";
import StatusBarComponent from "../../../components/customStatusBar";
import Spinner from "react-native-loading-spinner-overlay";
import {
  Image,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { useFormik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../../constants/images";
import { useAuth } from "../../../context/AuthContext";
import changePassProfileValidationSchema from "../../../validations/ChangePassProfile";
import { changePassProfile } from "../../../services/ApiCalls";
import GreenVerifiedSvg from "../../../assets/svg/VerifiedIcon";
import axios from "axios";
//! got some work here this is not working re-check
const password = () => {
  const router = useRouter();
  const [apiErr, setApiErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { userToken } = useAuth();
  const [hidePass, setHidePass] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const onSubmit = async (values) => {
    const API_URL = process.env.EXPO_PUBLIC_BASE_URL;
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("old_password", values.oldPassword);
      formData.append("new_password", values.newPassword);

      const changePassRes = await axios.post(
        `${API_URL}/change-password`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userToken}`, // Token in header
          },
        }
      );
      // const changePassRes = await changePassProfile(formData, userToken);
      if (changePassRes.status === 200) {
        console.log(changePassRes);
        setModalVisible(true);
        resetForm();
      }
    } catch (error) {
      console.error(error.response);
      console.log(error.response);
      console.log(error);
      // setApiErr(error.response);
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
    setFieldValue,
  } = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: changePassProfileValidationSchema,
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
            <View className="w-full flex flex-col items-center justify-center">
              <Image
                source={images.FingerprintImg}
                className="w-[40px] h-[40px] mb-1"
                resizeMode="contain"
              />
              <Text className="font-sfsemibold text-[16px]">
                Change password?
              </Text>
            </View>
            {apiErr && (
              <Text className=" text-center my-2 text-red-500 text-sm font-sfregular ">
                {apiErr}
              </Text>
            )}

            <View className="p-3 flex-1">
              <View className="flex flex-col items-center justify-center">
                <View className="flex flex-col items-center gap-y-4 w-full ">
                  <View className="w-full">
                    <View className="flex flex-row items-center w-full">
                      <TextInput
                        secureTextEntry={hidePass ? true : false}
                        onChangeText={(e) => {
                          setApiErr("");
                          handleChange("oldPassword")(e);
                        }}
                        onBlur={handleBlur("oldPassword")}
                        value={values.oldPassword}
                        className={`bg-[#f2f2f2] font-sfregular ${
                          Platform.OS === "ios" ? "h-11" : ""
                        } px-2 py-2 rounded-sm flex-1`}
                        placeholder="Old password"
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
                    {errors.oldPassword && touched.oldPassword && (
                      <Text className="self-start text-red-500 text-sm font-sfregular ">
                        {errors.oldPassword}
                      </Text>
                    )}
                  </View>
                  <View className="w-full">
                    <View className="flex flex-row items-center w-full">
                      <TextInput
                        secureTextEntry={hidePass ? true : false}
                        onChangeText={(e) => {
                          setApiErr("");
                          handleChange("newPassword")(e);
                        }}
                        onBlur={handleBlur("newPassword")}
                        value={values.newPassword}
                        className={`bg-[#f2f2f2] font-sfregular ${
                          Platform.OS === "ios" ? "h-11" : ""
                        } px-2 py-2 rounded-sm flex-1`}
                        placeholder="New password"
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
                    {errors.newPassword && touched.newPassword && (
                      <Text className="self-start text-red-500 text-sm font-sfregular ">
                        {errors.newPassword}
                      </Text>
                    )}
                  </View>
                </View>

                <View className="mt-4 w-full">
                  <TouchableOpacity
                    onPress={() => router.replace("/account")}
                    className="bg-[#F2F2F2] w-full items-center p-2 rounded-lg mt-4 shadow-sm"
                  >
                    <Text className="font-sfsemibold text-[#979797] text-[15px]">
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-[#0A80FB] w-full items-center p-2 rounded-lg mt-4"
                  >
                    <Text className="font-sfsemibold text-white text-[15px]">
                      Done
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Modal */}
            <View>
              <Modal
                visible={modalVisible}
                animationType={"fade"}
                transparent={true}
              >
                <View
                  className="w-full flex-1 flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(52, 52, 52, 0.8)",
                  }}
                >
                  <View className="w-[90%] h-auto bg-white rounded-lg p-2 flex flex-col gap-y-1 items-center justify-center">
                    <GreenVerifiedSvg />
                    <Text className="text-center font-sfsemibold ">
                      Password changed successfully!
                    </Text>
                    <Text className="text-center font-sfsemibold text-[#979797] ">
                      Your account password has been updated successfully.
                    </Text>
                    <TouchableOpacity
                      className="bg-[#0A80FB] p-2 w-[60%] rounded-md"
                      onPress={() => {
                        setModalVisible(false);
                        router.replace("/account");
                      }}
                    >
                      <Text className="text-white font-sfsemibold text-center">
                        OK
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </StatusBarComponent>
    </>
  );
};

export default password;
