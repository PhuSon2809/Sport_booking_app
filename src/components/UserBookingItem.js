import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import { COLORS } from "../constants";

const UserBookingItem = ({ user }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      className="mb-3 p-4 space-y-1 bg-white rounded-lg"
      style={{ elevation: 1 }}
      onPress={() => navigation.navigate("ListSportField")}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <Image source={user.avatar} className="w-10 h-10" />
          <View>
            <Text>{user.userName}</Text>
            <Text>{user.phone}</Text>
          </View>
        </View>

        <Pressable className="rounded-full p-2 bg-[#00c18741]">
          <Entypo name="dots-three-vertical" size={20} color={COLORS.primary} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default UserBookingItem;
