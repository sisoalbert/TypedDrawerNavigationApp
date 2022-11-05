import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';

const ActionButtons = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1DA756' : '#D3F36B',
    color: isDarkMode ? '#fff' : '#000',
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
      }}>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: backgroundStyle.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginHorizontal: 10,
        }}>
        <Image
          source={require('../../assets/CrypoAssets/akar-icons_arrow-up.png')}
          style={{height: 25, width: 25}}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: backgroundStyle.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginHorizontal: 10,
        }}>
        <Image
          source={require('../../assets/CrypoAssets/akar-icons_arrow-up-right.png')}
          style={{height: 25, width: 25}}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: backgroundStyle.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginHorizontal: 10,
        }}>
        <Image
          source={require('../../assets/CrypoAssets/akar-icons_arrow-right-left.png')}
          style={{height: 25, width: 25}}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: backgroundStyle.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginHorizontal: 10,
        }}>
        <Image
          source={require('../../assets/CrypoAssets/akar-icons_copy.png')}
          style={{height: 25, width: 25}}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;

const styles = StyleSheet.create({});
