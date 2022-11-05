import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useColorScheme,
} from 'react-native';
import React from 'react';

import Data from '../../assets/CrypoAssets/data.json';
import {FlatList} from 'react-native-gesture-handler';

type DataType = {
  id: number;
  name: string;
  price: string;
  dollar_amount: number;
  percent: number;
  imgLight: string;
  imgDark: string;
};

type itemType = {
  item: DataType;
};
const ListContainer = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#232826' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
  };

  const Card = ({item}: itemType) => {
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: backgroundStyle.backgroundColor,
            width: '90%',
            height: 80,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#7C7C7C',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image
                  source={{
                    uri: item.imgLight,
                  }}
                  style={{height: 25, width: 25}}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  color: backgroundStyle.color,
                  paddingBottom: 10,
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  color: '#7C7C7C',
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                {item.price}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                color: backgroundStyle.color,
                paddingBottom: 10,
                fontSize: 15,
                fontWeight: '500',
              }}>
              {item.dollar_amount}
            </Text>
            <Text
              style={{
                color: '#29CD00',
                fontSize: 15,
                fontWeight: '500',
              }}>
              {item.percent}%
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
      <View
        style={{
          width: '100%',
          //   justifyContent: 'center',
          //   alignItems: 'center',
        }}>
        <FlatList
          data={Data}
          renderItem={Card}
          keyExtractor={(item: DataType) => item.name}
        />
      </View>
    </View>
  );
};

export default ListContainer;
