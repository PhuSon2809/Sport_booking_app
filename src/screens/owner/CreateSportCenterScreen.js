import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";

const CreateSportCenterScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Create",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 25,
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
    });
  }, []);

  return (
    <View>
      <Text>CreateSportCenterScreen</Text>
    </View>
  );
};

export default CreateSportCenterScreen;

const styles = StyleSheet.create({});
