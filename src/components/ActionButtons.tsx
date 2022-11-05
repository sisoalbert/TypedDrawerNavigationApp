import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ActionButtons = () => {
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
          backgroundColor: '#1DA756',
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
          backgroundColor: '#1DA756',
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
          backgroundColor: '#1DA756',
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
          backgroundColor: '#1DA756',
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
