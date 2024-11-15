import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const IndexPage = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSubmit = useCallback(() => {
    const data = {
      name,
      phoneNumber,
      age,
      imageUrl,
      email,
      password,
      message,
      selectedLanguage,
    };
    console.log(data);
    Keyboard.dismiss();
  }, [
    age,
    email,
    imageUrl,
    name,
    password,
    phoneNumber,
    message,
    selectedLanguage,
  ]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      // keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
    >
      <Switch
        onValueChange={setIsEnabled}
        value={isEnabled}
        // disabled
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        style={{ alignSelf: "flex-start" }}
      />
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#a5a5a5"
        onChangeText={setName}
        defaultValue={name}
        autoComplete="name"
        // editable={false}
        // readOnly
        // selectTextOnFocus
        enterKeyHint="next"
        maxLength={50}
        // onEndEditing={(event) => console.log(event.nativeEvent.text)}
        onSubmitEditing={(event) => console.log(event.nativeEvent.text)}
        // onKeyPress={(event) => console.log(event.nativeEvent.key)}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        placeholderTextColor="#a5a5a5"
        onChangeText={setPhoneNumber}
        defaultValue={phoneNumber}
        keyboardType="phone-pad"
        autoComplete="tel"
        enterKeyHint="next"
        inputMode="tel"
        maxLength={14}
      />
      <Text style={styles.label}>Your Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        placeholderTextColor="#a5a5a5"
        onChangeText={setAge}
        defaultValue={age}
        keyboardType="number-pad"
        enterKeyHint="next"
        inputMode="numeric"
        maxLength={3}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#a5a5a5"
        onChangeText={setEmail}
        defaultValue={email}
        keyboardType="email-address"
        autoComplete="email"
        enterKeyHint="next"
        inputMode="email"
        maxLength={80}
      />
      <Text style={styles.label}>Image URL</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your image url"
        placeholderTextColor="#a5a5a5"
        onChangeText={setImageUrl}
        defaultValue={imageUrl}
        keyboardType="url"
        inputMode="url"
        enterKeyHint="next"
        maxLength={200}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a password"
        placeholderTextColor="#a5a5a5"
        onChangeText={setPassword}
        defaultValue={password}
        secureTextEntry
        autoComplete="new-password"
        enterKeyHint="next"
        maxLength={30}
      />
      <Text style={styles.label}>Message</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Enter a message"
        placeholderTextColor="#a5a5a5"
        onChangeText={setMessage}
        defaultValue={message}
        enterKeyHint="enter"
        maxLength={200}
        multiline
      />
      <Text style={styles.label}>Select a language</Text>
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: 5,
          borderColor: "#838383",
        }}
      >
        <Picker
          selectedValue={selectedLanguage}
          // enabled={false}
          // mode="dropdown"
          // dropdownIconColor="red"
          // dropdownIconRippleColor="red"
          prompt="Select a language"
          placeholder="Select a language"
          // itemStyle={{ color: "red" }}
          // selectionColor="red"
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        >
          {/* <Picker.Item label="Select a language" /> */}
          <Picker.Item
            label="Java"
            value="java"
            color={selectedLanguage === "java" ? "blue" : ""}
          />
          <Picker.Item
            label="JavaScript"
            value="js"
            color={selectedLanguage === "js" ? "blue" : ""}
          />
        </Picker>
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    borderColor: "#838383",
    padding: 10,
    fontSize: 18,
    marginBottom: 12,
    width: "100%",
    maxWidth: 600,
    marginHorizontal: "auto",
    height: 45,
  },
  multiline: {
    height: "auto",
    minHeight: 90,
    maxHeight: 135,
    textAlignVertical: "top",
  },
  label: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "left",
    marginBottom: 5,
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
