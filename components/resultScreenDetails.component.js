import React from 'react';
import { 
  Text, 
  View, 
  Platform, 
  StatusBar, 
  SafeAreaView, 
  Image, 
  TouchableOpacity, 
  StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { ListItem } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import {
  useFonts,
  PTSans_400Regular,
  OpenSans_400Regular
} from '@expo-google-fonts/dev';
import { getCustomTabsSupportingBrowsersAsync } from 'expo-web-browser';

export default function resultScreenDetails() {

  let [fontsLoaded] = useFonts({
    PTSans_400Regular,
    OpenSans_400Regular,
  });

  const list = [
    {
      name: 'Jean-Pierre',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      rating: 4,
      comment: 'Une sélection de bière pointue. Des tapas d\'une rare qualité.'
    },
    {
      name: 'Chantal',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      rating: 5,
      comment: 'Un de mes spots favoris dans le 19ème pour boire une bonne bière !'
    },// more items
  ]

  let comments = list.map((l,i)=> {
      let rating = [];
      for(let i = 0 ; i < 5 ; i++){
          if(i < l.rating){
              rating.push(<AntDesign key={i} name="star" size={16} color="#FF8367" />)
          } else {
              rating.push(<AntDesign key={i} name="staro" size={16} color="#FF8367" />)
          }
      }
      return(
          <View style={styles.listItemContainer}>
            <ListItem
                key={i}
                containerStyle={styles.ListItem}
                titleStyle={styles.name}
                leftAvatar={{ source: { uri: l.avatar_url },containerStyle: styles.avatar}}
                title={l.name}
                subtitle={<Text>{rating}</Text>}
            />
            <Text style={styles.comment}>{l.comment}</Text>
          </View>
      )
  });

  if(!fontsLoaded) {
    return (
      <AppLoading />
    )
  } else {
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Comment on y va ? </Text>
        <View style={styles.mapContainer} >
            <MapView style={styles.mapStyle}
                initialRegion={{
                latitude: 48.890169,
                longitude: 2.382937,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
        </View>

        <Text style={styles.title}>Quelques avis</Text>
        {comments}
    </SafeAreaView>
  );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 32,
    marginTop: 32
  },
  mapContainer: {
    marginTop:16,
    marginHorizontal: 32,
    height:120,
    borderRadius: 8,
    overflow:'hidden'
  },
  mapStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 8
  },
  listItemContainer: {
      marginHorizontal: 32,
      marginTop: 16
  },
  ListItem: {
      paddingLeft:0,
      paddingRight: 16,
      paddingVertical:0
  },
  avatar: {
      width: 44,
      height: 44,
      borderRadius: 50,
  },
  name: {
    marginBottom:6
  },
  comment: {
      marginTop: 8
  }
});