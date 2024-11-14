import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const IndexPage = () => {
  const [count, setCount] = useState(0);
  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pressable
        onPress={handlePress}
        style={styles.button}
        //  disabled
        android_ripple={{
          color: "#0000001f",
        }}
      >
        <Text style={styles.buttonText}>Submit {count} times</Text>
      </Pressable>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit {count} times</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Submit {count} times</Text>
      </TouchableOpacity>
      <TouchableHighlight
        onPress={handlePress}
        activeOpacity={0.9}
        style={styles.button}
        underlayColor="#f1149a8c"
      >
        <Text style={styles.buttonText}>Submit {count} times</Text>
      </TouchableHighlight>
    </View>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#f1149a",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    // textAlign: "center",
    cursor: "pointer",
  },
});
