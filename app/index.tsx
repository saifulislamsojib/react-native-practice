import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  Animated,
  Button,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  useAnimatedValue,
  View,
} from "react-native";
import useAppState from "../hooks/useAppState";
import alert from "../utils/alert";

const IndexPage = () => {
  const handleSubmit = async () => {
    const isOk = await alert(
      "Are you sure?",
      "You will not be able to undo this."
    );

    console.log(isOk, "isOk");
  };

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useAnimatedValue(0);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const appStateStatus = useAppState();

  console.log(appStateStatus, "appStateStatus");

  const linking = async () => {
    // const link = "mailto:support@expo.io";
    // const link = "tel:+123456789";
    // const link = "sms:+123456789";
    // const link = "https://google.com";

    // Linking.openURL(link);
    await Linking.openSettings();

    // const ok = await Linking.canOpenURL(link);
    // if (ok) {
    //   Linking.openURL(link);
    // } else {
    //   alert("Cannot open the link");
    // }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleSubmit}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Alert</Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <Button title="Fade In View" onPress={fadeIn} />
      <Button title="Fade Out View" onPress={fadeOut} />
      <Button title="Linking" onPress={linking} />
      <StatusBar style="auto" />
    </View>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
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
    cursor: "pointer",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
  },
});
