import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const IndexPage = () => {
  const [refreshing, setRefreshing] = useState(false);

  const handlePress = () => {
    console.log("Press the button");
  };

  const handleRefresh = () => {
    console.log("Refreshing");
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      style={styles.container}
      stickyHeaderIndices={[0]}
      stickyHeaderHiddenOnScroll
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      // horizontal
      // showsHorizontalScrollIndicator={false}
    >
      <View>
        <Text>Header Component</Text>
      </View>
      <ActivityIndicator size="large" color="green" />
      <View style={styles.box}>
        <Text>1st</Text>
      </View>
      <View style={styles.box}>
        <Text>1st</Text>
      </View>
      <View style={styles.box}>
        <Text>2st</Text>
      </View>
      <View style={styles.box}>
        <Text>3</Text>
      </View>
      <View style={styles.box}>
        <Text>4</Text>
      </View>
      <View style={styles.box}>
        <Text>5</Text>
      </View>
      <View style={styles.box}>
        <Text>6</Text>
      </View>
      <View style={styles.box}>
        <Text>7</Text>
      </View>
      <View style={styles.box}>
        <Text>8</Text>
      </View>
      <View>
        <Text
          // selectable
          style={styles.footer}
          numberOfLines={2}
          // ellipsizeMode="tail"
        >
          Footer Component Footer Component Footer Component Footer Component
          Footer Component Footer Component Footer Component Footer Component
          Footer Component Footer Component Footer Component Footer Component
          Footer Component Footer Component Footer Component Footer Component
          Footer Component Footer Component Footer Component Footer Component
        </Text>
        <Button title="Click Me Again" disabled onPress={handlePress} />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: "90%",
    marginHorizontal: "auto",
    marginVertical: 10,
    height: 200,
    backgroundColor: "lightblue",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
  },
  footer: {
    // textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
