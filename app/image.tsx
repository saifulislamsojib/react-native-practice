import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/favicon.png")}
        style={{ marginBottom: 10 }}
      />
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
          height: 150,
          width: 150,
        }}
        resizeMode="contain"
      />
      <ImageBackground
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{
          padding: 10,
          margin: 10,
        }}
        imageStyle={{ resizeMode: "cover", borderRadius: 10 }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Hello</Text>
        <Text style={{ color: "white", fontSize: 20 }}>Hello</Text>
        <Text style={{ color: "white", fontSize: 20 }}>Hello</Text>
        <Text style={{ color: "white", fontSize: 20 }}>Hello</Text>
        <Text style={{ color: "white", fontSize: 20 }}>Hello</Text>
        <Text style={{ color: "white", fontSize: 20 }}>Hello</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
