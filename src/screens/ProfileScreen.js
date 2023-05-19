import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ListFunctions } from "../assets/data/listFunction";
import { COLORS, images } from "../constants";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="h-64 flex-col items-center justify-center gap-2">
          <Image
            source={images.sanBong}
            className="rounded-full"
            style={{ width: 100, height: 100 }}
          />
          <Text className="text-[25px] font-bold">Tran Phu Son</Text>
          <Text className="font-semibold" style={{ color: COLORS.primary }}>
            Edit Profile
          </Text>
        </View>

        <View className="px-5">
          {ListFunctions.map((item) => (
            <View
              key={item.id}
              className="p-3 flex-row items-center justify-between mb-3"
            >
              <View className="flex-row items-center gap-2">
                {item.icon}
                <Text className="text-[16px] font-semibold">{item.title}</Text>
              </View>
              <Pressable onPress={logout}>
                <Entypo name="chevron-right" size={24} color="black" />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
