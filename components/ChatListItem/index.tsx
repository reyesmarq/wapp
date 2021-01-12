import moment from "moment"; // TODO: replace this npm package for dayjs maybe
import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import {ChatRoom} from "../../types";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem: React.FC<ChatListItemProps> = ({chatRoom}) => {
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ChatRoom", {id: chatRoom.id, name: user.name});
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{uri: user.imageUri}} style={styles.avatar} />

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>

        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
