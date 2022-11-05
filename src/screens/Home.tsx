import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';
import Header from '../components/Header';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AccountCard from '../components/AccountCard';
import ActionButtons from '../components/ActionButtons';
import ListContainer from '../components/ListContainer';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = ({navigation}: NativeStackScreenProps<MainStackParamList>) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundStyle.backgroundColor,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
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
