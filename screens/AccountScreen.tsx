import {FlatList, ScrollView,  StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import * as React from "react";
import {Avatar, Button, Card, Icon, ListItem} from "react-native-elements";

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
      <ListItem onPress={item.callback} bottomDivider={false} containerStyle={styles.listitem}>
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
    <ScrollView >
      <Card containerStyle={styles.card}>
        <ListItem bottomDivider={false}
                  containerStyle={styles.listitem}
        >
          <Avatar
              size={64}
              rounded
              //icon={{ name: 'pencil', type: 'font-awesome' }}
              //source={{uri:'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg'}}
              title="PN"
              containerStyle={{ backgroundColor: '#6733b9' }}
          />
          <ListItem.Content>
            <ListItem.Title>Pruk Nilsuriyakon</ListItem.Title>
            <ListItem.Subtitle>member</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </Card>



      <Text>Settings</Text>
      <Card containerStyle={styles.card}>
        <FlatList
            data={list1}
            keyExtractor={(a: List1Data, index: number) => index.toString()}
            renderItem={renderRow}
            scrollEnabled={false}
        />
      </Card>
      <Button
          title="Sign Out"
          buttonStyle={{
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 25,
          }}
          titleStyle={styles.title}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card:{
    backgroundColor:'rgba(56, 172, 236, 1)',
    borderWidth:0,
    borderRadius:10,
    paddingVertical:0,
    paddingHorizontal:10,
    marginLeft: 10,
    marginRight: 10,
  },
  listitem:{
    backgroundColor:'rgba(56, 172, 236, 1)',
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 0,
    marginLeft:0,
    marginTop:0,

  },
});
