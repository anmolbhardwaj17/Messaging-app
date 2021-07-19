import React,{useState, useEffect} from 'react'
import { ScrollView } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { auth , db } from '../firebase';


const CustomListItem = ({id, chatName, enterChat}) => {
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = db
        .collection('chats')
        .doc(id).collection('messages')
        .orderBy('timestamp', "desc")
        .onSnapshot((snapshot) => setChatMessages(snapshot.docs.map(doc => doc.data())));

        return unsubscribe;

    });

    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar
                rounded 
                source={{
                    uri: chatMessages?.[0]?.photoURL || "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:"700", color:"#333333"}}>{chatName}</ListItem.Title>
                <ListItem.Subtitle style={{color:"#909090"}} numberOfLines={1} ellipsizeMode="tail">
                    {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem;

const styles = StyleSheet.create({});
