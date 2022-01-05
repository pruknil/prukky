import {FlatList, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import * as React from "react";
import {Button, Icon,ListItem} from "react-native-elements";
import {MaterialCommunityIcons} from "@expo/vector-icons";

type List1Data = {
  title: string;
  icon: string;
  type: string;
  callback: () => void;
};
const list1: List1Data[] = [
  {
    title: 'Language',
    icon: 'language',
    type: '',
    callback: () => {console.log("Language click")}
  },
  {
    title: 'Dark Mode',
    icon: 'bedtime',
    type: '',
    callback: () => {console.log("Dark Mode click")}
  },
  {
    title: 'PIN & Password',
    icon: 'form-textbox-password',
    type: 'material-community',
    callback: () => {console.log("PIN & Password click")}
  },
  {
    title: 'Face ID/Touch ID Setting',
    icon: 'fingerprint',
    type: '',
    callback: () => {console.log("Face ID/Touch ID Setting click")}
  },
];
const log = () => console.log('this is an example method');

const renderRow = ({ item }: { item: List1Data }) => {
  return (
      <ListItem
          onPress={item.callback}
          bottomDivider
      >
        <Icon type={item.type} name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
  );
};
export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <FlatList
          data={list1}
          keyExtractor={(a: List1Data, index: number) => index.toString()}
          renderItem={renderRow}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
