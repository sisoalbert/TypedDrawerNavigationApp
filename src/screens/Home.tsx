import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';
import Header from '../components/Header';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AccountCard from '../components/AccountCard';
import ActionButtons from '../components/ActionButtons';
import ListContainer from '../components/ListContainer';

const Home = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <View>
        <Header />
        <AccountCard />
        <ActionButtons />
        <ListContainer />

        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('Details', {title: 'Quester Studios'})
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
