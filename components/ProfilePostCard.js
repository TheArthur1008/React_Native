import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const ProfilePostCard = ({ url, title, mapMark }) => {
  return (
    <View style={styles.container}>
      <Image source={url} style={styles.postImage} />
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="comment" size={24} color="#FF6C00" />
          <Text style={styles.quantity}> 0</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 24 }}
        >
          <AntDesign name="like2" size={24} color="#FF6C00" />
          <Text style={styles.quantity}> 0</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <Text style={styles.locationTitle}>{mapMark}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },
  postImage: {
    marginBottom: 8,
    maxWidth: "100%",
    borderRadius: 8,
    height: 240,
    resizeMode: "cover",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    marginBottom: 8,
  },
  quantity: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    marginLeft: 6,
  },
  locationTitle: {
    marginLeft: 4,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
