import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AccountCard = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
        }}>
        Current Balance
      </Text>
      <Text
        style={{
          color: '#fff',
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
