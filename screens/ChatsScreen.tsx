import React from "react";
import {StyleSheet, FlatList} from "react-native";
import {View} from "../components/Themed";
import ChatListItem from "../components/ChatListItem";
import chatRooms from "../data/ChatRooms";

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <ChatListItem chatRoom={chatRooms[0]} /> */}
      <FlatList
        style={{width: "100%"}}
        data={chatRooms}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatsScreen;
