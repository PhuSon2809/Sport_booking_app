import React, { useState } from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  Keyboard,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { ButtonCustom, Input, Loader, TitleName } from "../components";
import { COLORS, images } from "../constants";
import { Box, Flex } from "native-base";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("userData");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.inputs.email &&
          inputs.password == userData.inputs.password
        ) {
          navigation.navigate("OwnerMain");
          AsyncStorage.setItem(
            "userData",
            JSON.stringify({ ...userData, loggedIn: true })
          );
        } else {
          Alert.alert("Error", "Invalid Details");
        }
      } else {
        Alert.alert("Error", "User does not exist");
      }
    }, 2000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Loader visible={loading} />
      <ScrollView>
        <View className="mt-6 px-5">
          <View className="items-center">
            <TitleName textSize={40} logoHeight={55} logoWidth={55} />
            <View className="flex-col gap-1 mt-4">
              <Text
                className="text-[22px] text-center font-extrabold mt-8"
                style={{ color: COLORS.black }}
              >
                Discover, book & enjoy
              </Text>
              <Text
                className="text-[14px] text-center mt-10"
                style={{ color: COLORS.black }}
              >
                Sports for the healthy life
              </Text>
            </View>
          </View>
          <View className="my-10">
            <View className="flex-row justify-between mb-5">
              <View style={styles.social}>
                <Image className="w-8 h-8" source={images.Google} />
              </View>
              <View style={styles.social}>
                <Image className="w-8 h-8" source={images.Facebook} />
              </View>
            </View>
            <Input
              onChangeText={(text) => handleOnchange(text, "email")}
              onFocus={() => handleError(null, "email")}
              icon={
                <MaterialCommunityIcons
                  name="email"
                  size={24}
                  color={COLORS.lightPrimary}
                />
              }
              lable="Email"
              placeholder="Enter your email"
              error={errors.email}
              marginBottom={20}
              height={90}
            />
            <Input
              onChangeText={(text) => handleOnchange(text, "password")}
              onFocus={() => handleError(null, "password")}
              icon={
                <FontAwesome
                  name="lock"
                  size={24}
                  color={COLORS.lightPrimary}
                />
              }
              lable="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
              marginBottom={20}
              height={90}
            />
            <ButtonCustom
              title="Log In"
              borderRadius={5}
              marginVertical={20}
              onPress={validate}
            />
            <Text
              className="text-[15px] text-right font-bold"
              style={{
                color: COLORS.primary,
              }}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              Forgot password?
            </Text>
            <Flex marginTop={8}>
              <Text
                className="text-[16px] text-center font-bold mb-10"
                onPress={() => navigation.navigate("RegistrationScreen")}
                style={{
                  color: COLORS.black,
                }}
              >
                Don't have an account?
                <Text style={{ color: COLORS.primary }}> Sign up</Text>
              </Text>
              <Text
                className="text-[15px] text-center leading-5"
                style={{
                  color: COLORS.black,
                }}
              >
                By creating a new account, you agree with our{" "}
                <Text className="font-bold">Terms & Conditions</Text> and{" "}
                <Text className="font-bold">Privacy Policy</Text>
              </Text>
            </Flex>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  social: {
    backgroundColor: COLORS.light,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 170,
  },
});
