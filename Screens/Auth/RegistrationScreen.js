import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
  Pressable,
  Image,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const photoAvatar = require("../../assets/images/avatar.png");

const initialState = {
  avatar: null,
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [dimensions, setDimansions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const touchableKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimansions(width);
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={touchableKeyboard}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/bg-image.png")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "heigth"}
        >
          <View
            style={{
              ...styles.container,
              paddingBottom: isKeyboardShown ? 16 : 78,
            }}
          >
            <View style={styles.avatarWrapper}>
              <Image style={styles.avatarImg} />
              <Pressable
                onPress={() => {
                  console.log("Add photo");
                }}
              >
                <View style={styles.addAvatarIcon}>
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                </View>
              </Pressable>
            </View>
            <View style={{ ...styles.form, width: dimensions }}>
              <Text style={styles.title}>Регистрация</Text>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Логин"
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  onFocus={() => setIsKeyboardShown(true)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onFocus={() => setIsKeyboardShown(true)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Пароль"
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  onFocus={() => setIsKeyboardShown(true)}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={keyboardHide}
              >
                <Text style={styles.textButton}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.containerLink}
                onPress={() => navigation.navigate("Login")}
                activeOpacity={0.8}
              >
                <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  avatarWrapper: {
    position: "absolute",
    flexDirection: "row",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    alignItems: "flex-end",
  },
  avatarImg: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addAvatarIcon: {
    position: "absolute",
    right: -13,
    bottom: 14,
  },
  removeAvatarIcon: {
    position: "absolute",
    right: -13,
    bottom: 14,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  title: {
    textAlign: "center",
    marginBottom: 33,
    marginTop: 92,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  form: {
    justifyContent: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    heigth: 50,
    marginBottom: 16,
    paddingLeft: 16,
  },
  button: {
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    height: 51,
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  containerLink: {
    alignItems: "center",
  },
  link: {
    color: "#1B4371",
  },
});
