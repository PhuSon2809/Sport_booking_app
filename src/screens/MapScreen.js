import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants";
import MapView, { Marker } from "react-native-maps";
import { listSportCenters } from "../assets/data/listSportCenter";

const MapScreen = () => {
  const navigation = useNavigation();

  const mapView = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Map Screen",
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
          onPress={() => navigation.navigate("SportCenter")}
        />
      ),
    });
  }, []);

  const coordinates = [];

  const details = listSportCenters.map((item) => {
    coordinates.push({
      latitude: Number(item.latitude),
      longitude: Number(item.longitude),
    });
  });

  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: {
        top: 190,
        left: 190,
        bottom: 190,
        right: 190,
      },
    });
  }, []);

  return (
    <View>
      <MapView ref={mapView} style={{ width: "100%", height: "100%" }}>
        {listSportCenters.map((center, index) => {
          return (
            <Marker
              key={index}
              title={center.name}
              coordinate={{
                latitude: Number(center.latitude),
                longitude: Number(center.longitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#003580",
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {center.name}
                </Text>
              </Pressable>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
