import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const onMicroPhonePress = () => {
    console.warn("microphone");
  };

  const onSendPress = () => {
    console.warn(`Sending ${message}`);
    // Send the message to the backend
    setMessage("");
  };

  const onPress = () => {
    if (!message) {
      onMicroPhonePress();
    } else {
      onSendPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh" color="grey" size={24} />
        <TextInput
          placeholder={"Type a message"}
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Entypo name="attachment" color="grey" size={24} style={styles.icon} />
        {!message && (
          <FontAwesome
            name="camera"
            color="grey"
            size={24}
            style={styles.icon}
          />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <FontAwesome name="microphone" color="white" size={24} />
          ) : (
            <MaterialIcons name="send" color="white" size={24} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
