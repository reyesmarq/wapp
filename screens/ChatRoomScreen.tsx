import React from "react";
import {FlatList, ImageBackground} from "react-native";
import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
// import BG from ""

const ChatRoomScren = () => {
  return (
    <ImageBackground
      source={require("../assets/images/BG.png")}
      style={{width: "100%", height: "100%"}}
    >
      <FlatList
        data={chatRoomData.messages}
        renderItem={({item}) => <ChatMessage message={item} />}
        inverted
      />
    </ImageBackground>
  );
};

export default ChatRoomScren;
