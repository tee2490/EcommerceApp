import { Button, TextInput, StyleSheet, Text, View } from "react-native";
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
      <View>
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <TextInput
                name="email"
                placeholder="Email Address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && <Text>{errors.email}</Text>}

              <TextInput
                name="password"
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text>{errors.password}</Text>
              )}

              <Button
                onPress={handleSubmit}
                title="LOGIN"
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
