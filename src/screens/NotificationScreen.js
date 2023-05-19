import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

const NotificationScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Statistic",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: COLORS.black,
        height: 60,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{
            marginRight: 12,
          }}
        />
      ),
      headerLeft: () => (
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          onPress={() => navigation.navigate("OwnerMain")}
        />
      ),
    });
  }, []);

  return (
    <View>
      <Text>NotificationScreen</Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
