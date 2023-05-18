import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";

const CustomerInformationScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Customer Information",
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
      <Text>CustomerInformationScreen</Text>
    </View>
  );
};

export default CustomerInformationScreen;

const styles = StyleSheet.create({});
