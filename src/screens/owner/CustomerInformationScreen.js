import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Input, UserBookingItem } from "../../components";
import { COLORS } from "../../constants";
import { ListUsers } from "../../assets/data/listUser";
import { FlatList } from "react-native";

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
    <SafeAreaView className="flex-1 bg-[#20224A] relative">
      <View className="flex-1 bg-[#ECF3FF] rounded-t-3xl px-5">
        <View className="mt-5">
          <Input
            onChangeText={(text) => setInputSearch(text)}
            placeholder="Enter sport center name"
            icon={
              <Ionicons name="ios-search" size={25} color={COLORS.primary} />
            }
            borderColor={COLORS.primary}
            height={70}
          />
        </View>

        <View className="flex-1">
          <FlatList
            data={ListUsers}
            keyExtractor={(user) => user.id}
            renderItem={(user) => {
              return <UserBookingItem user={user.item} />;
            }}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomerInformationScreen;

const styles = StyleSheet.create({});
