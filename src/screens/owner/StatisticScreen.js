import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";

const StatisticScreen = () => {
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
          onPress={() => navigation.navigate("Notification")}
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
      <Text>StatisticScreen</Text>
    </View>
  );
};

export default StatisticScreen;

const styles = StyleSheet.create({});
