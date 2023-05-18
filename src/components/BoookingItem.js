import { Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { COLORS } from "../constants";
import Divide from "./Divide";

const BoookingItem = ({ booking }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      className="bg-white rounded-xl border-gray-300 border-2 p-4 mb-5"
      onPress={() => {}}
    >
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center gap-2">
          <Feather name="calendar" size={25} color={COLORS.primary} />
          <Text className="text-[16px]">{booking.day}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Feather name="clock" size={24} color={COLORS.primary} />
          <Text className="text-[16px]">{booking.startTime}</Text>
        </View>
      </View>

      <Divide backgroundColor={COLORS.gray} height={2} />

      <View className="flex-row items-center gap-5 justify-between pt-2">
        <View className="space-y-1">
          <Text className="text-[18px] font-bold">{booking.name}</Text>
          <Text className="text-[16px] text-gray-500">{booking.address}</Text>
        </View>
        <Pressable className="rounded-full p-2 bg-[#00c18741]">
          <Entypo name="dots-three-vertical" size={20} color={COLORS.primary} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default BoookingItem;
