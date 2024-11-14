import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";

const data = [
  {
    id: 1,
    title: "First Item",
    description: "This is the first item",
  },
  {
    id: 2,
    title: "Second Item",
    description: "This is the second item",
  },
  {
    id: 3,
    title: "Third Item",
    description: "This is the third item",
  },
  {
    id: 4,
    title: "Fourth Item",
    description: "This is the fourth item",
  },
  {
    id: 5,
    title: "Fifth Item",
    description: "This is the fifth item",
  },
  {
    id: 6,
    title: "Sixth Item",
    description: "This is the sixth item",
  },
  {
    id: 7,
    title: "Seventh Item",
    description: "This is the seventh item",
  },
  {
    id: 8,
    title: "Eighth Item",
    description: "This is the eighth item",
  },
  {
    id: 9,
    title: "Ninth Item",
    description: "This is the ninth item",
  },
  {
    id: 10,
    title: "Tenth Item",
    description: "This is the tenth item",
  },
  {
    id: 11,
    title: "Eleventh Item",
    description: "This is the eleventh item",
  },
  {
    id: 12,
    title: "Twelfth Item",
    description: "This is the twelfth item",
  },
];

const IndexPage = () => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    console.log("Refreshing");
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <>
      <View>
        <Text style={styles.header}>FlatList Component</Text>
      </View>
      <FlatList
        // contentContainerStyle={{ gap: 20 }}
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.box}>
            <Text style={styles.boxTitle}>
              {index + 1}. {item.title}
            </Text>
            <Text style={styles.boxDescription}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id?.toString()}
        ItemSeparatorComponent={() => <Text style={styles.separator} />}
        ListHeaderComponent={() => (
          <Text style={styles.header}>List Items ({data.length})</Text>
        )}
        ListFooterComponent={() => <Text style={styles.header}>List Ends</Text>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={() => (
          <Text style={styles.header}>No Data Found</Text>
        )}
        refreshing={refreshing}
        // inverted
        // horizontal
      />
      <StatusBar style="auto" />
    </>
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
    // marginVertical: 10,
    height: 200,
    backgroundColor: "lightblue",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    padding: 10,
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  boxDescription: {
    fontSize: 18,
    fontWeight: 400,
  },
  footer: {
    // textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    textAlign: "center",
    fontStyle: "italic",
  },
  separator: {
    height: 20,
  },
});
