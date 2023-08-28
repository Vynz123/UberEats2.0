import { View, Text } from 'react-native'
import React from 'react'
import { ClerkProvider } from "@clerk/clerk-expo";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/Header';


const Home = () => {
  return ( 
      <SafeAreaView className='bg-white'>
        <Header />
      </SafeAreaView>
  )
}

export default Home