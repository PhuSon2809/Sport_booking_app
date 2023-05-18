import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BoookingItem, Input } from "../../components";
import { COLORS } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ListBookings } from "../../assets/data/bookings";
import { FlatList } from "react-native";

const listTab = [
  {
    title: "Accepted",
    path: "accepted",
  },
  {
    title: "Declined",
    path: "declined",
  },
];

const { width, height } = Dimensions.get("window");

const BookingManagerScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking Manager",
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

  const [tab, setTab] = useState("accepted");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [valueDate, setValueDate] = useState();

  const setTabFilter = (tabPath) => {
    setTab(tabPath);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    setValueDate(fDate);

    console.log(fDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <SafeAreaView className="flex-1">
      {/* Tab */}
      <View className="flex-row items-center justify-center border-b-2 border-gray-300">
        {listTab.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row justify-center px-5 py-3"
            style={[styles.btnTab, tab === item.path && styles.btnTabActive]}
            onPress={() => setTabFilter(item.path)}
          >
            {tab === item.path ? (
              <Text className="text-[18px] text-[#00C187] font-bold">
                {item.title}
              </Text>
            ) : (
              <Text className="text-[18px] font-semibold">{item.title}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <Pressable className="px-5 mt-5" onPress={() => showMode()}>
        <Input
          selectTextOnFocus={false}
          editable={false}
          value={valueDate}
          borderColor={COLORS.primary}
          icon={<Feather name="calendar" size={30} color={COLORS.black} />}
          className="text-[16px] ml-1"
          height={50}
        />
      </Pressable>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={valueDate}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      {/* List Booking */}
      <View className="flex-1 px-5">
        <FlatList
          data={ListBookings}
          keyExtractor={(booking) => booking.id}
          renderItem={(booking) => {
            return <BoookingItem booking={booking.item} />;
          }}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default BookingManagerScreen;

const styles = StyleSheet.create({
  btnTab: {
    width: width / 2,
  },
  btnTabActive: {
    color: COLORS.primary,
    borderColor: COLORS.primary,
    borderBottomWidth: 4,
  },
});
