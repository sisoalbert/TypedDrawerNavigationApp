import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';

const Header = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#3C413F' : '#7C7C7C',
    color: isDarkMode ? '#fff' : '#000',
  };

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
          backgroundColor: backgroundStyle.backgroundColor,
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
            backgroundColor: backgroundStyle.backgroundColor,
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
            backgroundColor: backgroundStyle.backgroundColor,
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
