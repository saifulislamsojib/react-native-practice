import { Alert } from "react-native";

const alert = (
  title: string,
  message?: string,
  userInterfaceStyle?: "unspecified" | "light" | "dark"
) => {
  return new Promise<boolean>((resolve) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => resolve(false),
        },
        {
          text: "OK",
          style: "default",
          onPress: () => resolve(true),
        },
      ],
      {
        cancelable: true,
        userInterfaceStyle,
      }
    );
  });
};

export default alert;
