import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { Divide } from "../../components";
import { COLORS, images } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";

const BookingDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <View>
        <View className="h-60">
          <Swiper loop autoplay activeDotColor={COLORS.black}>
            <Image source={images.soccer} className="w-full h-full" />
            <Image source={images.tennis} className=" w-full h-full" />
            <Image source={images.caulong} className=" w-full h-full" />
          </Swiper>
        </View>

        <View className="flex-row items-center justify-between p-4 absolute w-full">
          <Pressable
            className="bg-[#00C187] w-10 h-10 rounded-full flex items-center justify-center opacity-80"
            onPress={() => navigation.navigate("BookingCalendar")}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </Pressable>
          <Pressable
            className="bg-[#00C187] w-10 h-10 rounded-full flex items-center justify-center opacity-80"
            onPress={() => navigation.navigate("Notification")}
          >
            <Ionicons name="notifications-outline" size={24} color="white" />
          </Pressable>
        </View>
      </View>

      <View className="flex-1 bg-white w-full h-full p-5">
        <Text className="text-[20px] font-bold tracking-wide">
          Artificial football field 1
        </Text>

        <View className="flex-row items-end gap-5 justify-between mt-1 mb-4">
          <View>
            <Text className="text-gray-400 font-semibold">Date & time</Text>
            <Text className="text-[18px] font-bold">
              Feb. 20, 2023 | 19 : 00
            </Text>
          </View>
          <View className="bg-[#00c1873f] w items-center justify-center rounded-lg p-3 py-2">
            <Text className="text-[15px] text-[#00C187] font-semibold">
              Accepted
            </Text>
          </View>
        </View>

        <Divide backgroundColor="grey" height={2} />

        <View className="bg-white space-y-1 mt-4">
          <View className="flex-row items-center space-x-2 mb-2">
            <Image source={images.Google} className="w-8 h-8" />
            <Text className="text-[16px]">Tran Phu Son</Text>
          </View>
          <View className="flex-row items-center space-x-1 mb-2">
            <Feather name="phone" size={22} color={COLORS.primary} />
            <Text className="text-[16px]">0914360736</Text>
          </View>
          <View className="flex-row items-center space-x-1 mb-2">
            <Ionicons name="timer" size={22} color={COLORS.primary} />
            <Text className="text-[16px]">1 hour 30 minutes</Text>
          </View>
          <View className="flex-row items-center space-x-2 mb-2">
            <Image source={images.iconSportField} className="w-6 h-6" />
            <Text className="text-[15px]">7 x 7</Text>
          </View>
          <View className="flex-row items-center space-x-1 mb-2">
            <Text className="text-[16px] text-[#FE9619] font-semibold">
              Payment:{" "}
            </Text>
            <Text className="text-[16px]">No Payment</Text>
          </View>

          <View className="flex-row items-center space-x-2 ml-auto">
            <FontAwesome name="money" size={26} color={COLORS.primary} />
            <Text className="text-[24px] font-bold">200.000 VND</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingDetailScreen;
