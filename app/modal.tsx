import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomModal from "./CustomModal";

const IndexPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // const closeModal = () => setModalVisible(false);

  const handleModalVisible = () => setModalVisible(true);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pressable
        onPress={handleModalVisible}
        style={styles.button}
        android_ripple={{
          color: "#0000002f",
        }}
      >
        <Text style={styles.buttonText}>Open Modal</Text>
      </Pressable>
      {/* <Modal
        visible={modalVisible}
        onRequestClose={closeModal}
        // animationType="fade"
        animationType="slide"
      >
        <View style={styles.modal}>
          <Text style={styles.modalText}>Hello from Modal!</Text>
          <Ionicons
            onPress={closeModal}
            name="close-circle"
            size={32}
            style={{ textAlign: "right", marginRight: 5 }}
            color="blue"
          />
        </View>
      </Modal> */}
      <CustomModal
        onClose={setModalVisible}
        visible={modalVisible}
        presentationStyle="pageSheet"
      >
        <Text style={styles.modalText}>Hello from Modal!</Text>
      </CustomModal>
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
  modal: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
  },
  closeButton: {
    backgroundColor: "#f1149a",
    padding: 15,
    borderRadius: 10,
    alignSelf: "flex-end",
    margin: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    cursor: "pointer",
  },
});
