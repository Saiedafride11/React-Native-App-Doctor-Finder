import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Doctors from './components/Doctors';
import Home from './components/Home';
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
    
      <NativeRouter>
        <Link to="/"><Text>Home</Text></Link>
        <Link to="/home"><Text>Home</Text></Link>
        <Link to="/doctors"><Text>Doctors</Text></Link>

        <Routes>
            <Route path="/" elements={<Home></Home>}></Route>
            <Route path="/home" elements={<Home></Home>}></Route>
            <Route path="/doctors" elements={<Doctors></Doctors>}></Route>
        </Routes>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
