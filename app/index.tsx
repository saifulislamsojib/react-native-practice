import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
