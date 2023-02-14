import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";

import { PostsScreenCard } from "../../components/PostsScreenCard";

const POSTS = [
  {
    id: "1",
    url: require("../../assets/images/lionInNature.png"),
    title: "Lion In Nature",
    mapMark: "Kyiv Region, Ukraine",
  },
  {
    id: "2",
    url: require("../../assets/images/lionOnTheMountain.png"),
    title: "Lion On The Mountain",
    mapMark: "Kyiv Region, Ukraine",
  },
  {
    id: "3",
    url: require("../../assets/images/lionInNature.png"),
    title: "Lion In Nature",
    mapMark: "Kyiv Region, Ukraine",
  },
  {
    id: "4",
    url: require("../../assets/images/lionOnTheMountain.png"),
    title: "Lion On The Mountain",
    mapMark: "Kyiv Region, Ukraine",
  },
  {
    id: "5",
    url: require("../../assets/images/lionInNature.png"),
    title: "Lion In Nature",
    mapMark: "Kyiv Region, Ukraine",
  },
  {
    id: "6",
    url: require("../../assets/images/lionOnTheMountain.png"),
    title: "Lion On The Mountain",
    mapMark: "Kyiv Region, Ukraine",
  },
  {
    id: "7",
    url: require("../../assets/images/lionInNature.png"),
    title: "Lion In Nature",
    mapMark: "Kyiv Region, Ukraine",
  },
  {
    id: "8",
    url: require("../../assets/images/lionOnTheMountain.png"),
    title: "Lion On The Mountain",
    mapMark: "Kyiv Region, Ukraine",
  },
];

export const PostsScreen = () => {
  const [posts, setPosts] = useState(POSTS);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>Lion King</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <PostsScreenCard
              url={item.url}
              title={item.title}
              mapMark={item.mapMark}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userInfo: {
    marginLeft: 8,
  },
  username: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
