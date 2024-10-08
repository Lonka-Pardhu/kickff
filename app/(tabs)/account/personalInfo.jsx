import React, { useEffect, useState } from "react";
import StatusBarComponent from "../../../components/customStatusBar";
import Spinner from "react-native-loading-spinner-overlay";
import {
  Image,
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
import { getProfile, updateProfile } from "../../../services/ApiCalls";
import { useAuth } from "../../../context/AuthContext";
import editProfileValidationSchema from "../../../validations/EditProfileValidation";

const personalInfo = () => {
  const router = useRouter();
  const [apiErr, setApiErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { userToken } = useAuth();
  const [disableFields, setDisableFields] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchProfile = async () => {
      try {
        const profileRes = await getProfile(userToken);
        if (profileRes?.status === 200) {
          setFieldValue("firstName", profileRes.data.user.first_name);
          setFieldValue("lastName", profileRes.data.user.last_name);
          setFieldValue("email", profileRes.data.user.email);
          setFieldValue("username", profileRes.data.user.username);
        }
      } catch (error) {
        setApiErr(error.response.data);
        console.log(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const onSubmit = async (values) => {
    console.log(">>>", values);
    if (!disableFields) {
      router.replace("/account");
      return;
    }
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("first_name", values.firstName);
      formData.append("last_name", values.lastName);
      formData.append("username", values.username);
      formData.append("email", values.email);
      const updateProfileRes = await updateProfile(formData, userToken);
      if (updateProfileRes.status === 200) {
        console.log(updateProfileRes);
        router.push("/account");
        resetForm();
      }
    } catch (error) {
      console.log(error.response.data);
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
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
    },
    validationSchema: editProfileValidationSchema,
    onSubmit,
  });

  return (
    <>
      <Spinner visible={isLoading} />
      <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
        <ScrollView className="bg-white flex-1">
          <View className="w-full flex flex-row items-center justify-between border-b-[0.5px] border-[#0000004D] p-2">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex flex-row items-center"
            >
              <Feather name="chevron-left" size={24} color="black" />
              <Text className="font-sfsemibold text-[15px]">Back</Text>
            </TouchableOpacity>
            <View>
              <Text className="font-sfsemibold text-[17px]">
                Personal Information
              </Text>
            </View>
            <TouchableOpacity onPress={() => setDisableFields(true)}>
              <Text className="font-sfsemibold">Edit</Text>
            </TouchableOpacity>
          </View>
          {apiErr && (
            <Text className=" text-center my-2 text-red-500 text-sm font-sfregular ">
              {apiErr}
            </Text>
          )}
          <KeyboardAwareScrollView>
            <View className="p-3 flex-1">
              <View className="flex flex-col items-center justify-center">
                <View className="flex flex-col items-center gap-y-4 w-full ">
                  <View className="w-full">
                    <TextInput
                      editable={disableFields}
                      onChangeText={(e) => {
                        setApiErr("");
                        const newText = e.replace(/[^a-zA-Z]/g, "");
                        setFieldValue("firstName", newText);
                        handleChange("firstName");
                      }}
                      onBlur={handleBlur("firstName")}
                      value={values.firstName}
                      className={`bg-[#f2f2f2] ${
                        Platform.OS === "ios" ? "h-11" : ""
                      } font-sfregular px-2 py-2 rounded-sm w-full`}
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
                      editable={disableFields}
                      onChangeText={(e) => {
                        setApiErr("");
                        const newText = e.replace(/[^a-zA-Z]/g, "");
                        setFieldValue("lastName", newText);
                        handleChange("lastName");
                      }}
                      onBlur={handleBlur("lastName")}
                      value={values.lastName}
                      className={`bg-[#f2f2f2] ${
                        Platform.OS === "ios" ? "h-11" : ""
                      } font-sfregular px-2 py-2 rounded-sm w-full`}
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
                      editable={disableFields}
                      onChangeText={(e) => {
                        setApiErr("");
                        const newText = e.replace(/\s/g, "");
                        setFieldValue("username", newText);
                        handleChange("username");
                      }}
                      onBlur={handleBlur("username")}
                      value={values.username}
                      className={`bg-[#f2f2f2] ${
                        Platform.OS === "ios" ? "h-11" : ""
                      } font-sfregular px-2 py-2 rounded-sm w-full`}
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
                      editable={disableFields}
                      onChangeText={(e) => {
                        setApiErr("");
                        handleChange("email")(e);
                      }}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email"
                      className={`bg-[#f2f2f2] ${
                        Platform.OS === "ios" ? "h-11" : ""
                      } font-sfregular px-2 py-2 rounded-sm w-full`}
                      placeholder="Email"
                    />
                    {errors.email && touched.email && (
                      <Text className="self-start text-red-500 text-sm font-sfregular ">
                        {errors.email}
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
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </StatusBarComponent>
    </>
  );
};

export default personalInfo;
