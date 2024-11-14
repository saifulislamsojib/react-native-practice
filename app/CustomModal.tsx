import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Modal,
  type ModalProps,
  Platform,
  StyleSheet,
  View,
} from "react-native";

interface IProps extends ModalProps {
  onClose: (value: boolean) => void;
  isCloseIcon?: boolean;
  shadow?: boolean;
}

const CustomModal = ({
  visible,
  onClose,
  children,
  animationType,
  isCloseIcon = true,
  presentationStyle,
  shadow = presentationStyle ? false : true,
  ...rest
}: IProps) => {
  return (
    <Modal
      {...rest}
      animationType={animationType || presentationStyle ? "slide" : "fade"}
      transparent={presentationStyle ? false : true}
      visible={visible}
      presentationStyle={presentationStyle}
      onRequestClose={() => onClose(false)}
    >
      <View
        style={[styles.centeredView, !presentationStyle && styles.halfScreen]}
      >
        <View style={[styles.modalView, shadow && styles.shadow]}>
          {isCloseIcon && (
            <View style={styles.button}>
              <Ionicons
                name="close-circle"
                size={30}
                onPress={() => onClose(false)}
                color="#f63f6d"
              />
            </View>
          )}
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 0 : 22,
  },
  halfScreen: {
    backgroundColor: "#00000060",
    justifyContent: "center",
  },
  modalView: {
    width: "96%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
  },
  shadow: {
    shadowColor: "#000",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  button: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default CustomModal;
