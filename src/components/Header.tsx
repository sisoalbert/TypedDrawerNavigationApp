import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
      <TouchableOpacity
        style={{
          borderRadius: 10,
          height: 40,
          width: 40,
          backgroundColor: '#3C413F',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* ICON HERE */}
        <Image
          source={require('../../assets/CrypoAssets/bx_menu-alt-left.png')}
          style={{
            width: 25,
            height: 25,
          }}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            height: 40,
            width: 40,
            backgroundColor: '#3C413F',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 40,
          }}>
          {/* ICON HERE */}
          <Image
            source={require('../../assets/CrypoAssets/fluent_options-16-filled.png')}
            style={{
              width: 25,
              height: 25,
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            height: 40,
            width: 40,
            backgroundColor: '#3C413F',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* ICON HERE */}
          <Image
            source={require('../../assets/CrypoAssets/ant-design_scan-outlined.png')}
            style={{
              width: 25,
              height: 25,
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
