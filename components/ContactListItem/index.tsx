import moment from "moment"; // TODO: replace this npm package for dayjs maybe
import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import {ChatRoom, User} from "../../types";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

export type ChatListItemProps = {
  user: User;
};

const ContactListItem: React.FC<ChatListItemProps> = ({user}) => {
  const navigation = useNavigation();

  const onPress = () => {
    //navigate to chat room with this user
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{uri: user.imageUri}} style={styles.avatar} />

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
