import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object().shape({
  email: yup.string().required("กรุณากรอกข้อมูล").email("Invalid email"),
  password: yup
    .string()
    .required("กรุณากรอกข้อมูล")
    .min(8, "Password must contain at least 8 characters"),
});

const AccountScreen = () => {
  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
