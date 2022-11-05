import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';

const AccountCard = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#232826' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
    buttonBackgroundColor: isDarkMode ? '#fff' : '#000',
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,
      }}>
      <Text
        style={{
          color: backgroundStyle.color,
          fontSize: 16,
        }}>
        Current Balance
      </Text>
      <Text
        style={{
          color: backgroundStyle.color,
          fontSize: 40,
          fontWeight: '700',
        }}>
        $75 095.00
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'red',
            fontSize: 16,
            fontWeight: '700',
            marginRight: 20,
          }}>
          -4500.86
        </Text>
        <Text
          style={{
            color: 'red',
            fontSize: 16,
            fontWeight: '700',
          }}>
          32.5%
        </Text>
      </View>
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({});
