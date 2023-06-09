import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Divide = ({ height, backgroundColor, radius, width }) => {
  return (
    <View
      style={{
        height: height ? height : 90,
        width: width && width,
        backgroundColor: backgroundColor ? backgroundColor : COLORS.black,
        borderBottomLeftRadius: radius ? radius : 30,
        borderBottomRightRadius: radius ? radius : 30,
      }}
    ></View>
  );
};

export default Divide;

const styles = StyleSheet.create({});
