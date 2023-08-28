import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Header = () => {
  
  const [activeTab, setActiveTab] = useState("Delivery")  
  return (
    <View className='flex-row items-center justify-center pt-2.5'> 
      <HeaderButtons text="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab}/>
      <HeaderButtons text="Pickup" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  )
}

const HeaderButtons = (props) => (
      <TouchableOpacity 
        className={`flex flex-row w-[100] h-[37.55px] bg-${props.activeTab == props.text ? "black" : "white"} rounded-[27.86px] justify-center items-center mr-4`}
        onPress= {() => props.setActiveTab(props.text)}
      >
        <Text className={`text-${props.activeTab == props.text ? "white" : "black"} font-bold text-center text-lg `}>{props.text}</Text>
      </TouchableOpacity>
)


{/* <View className='flex-row items-center justify-center pt-2.5'>
      
      <View className=" flex flex-row w-[100] h-[37.55px] bg-black rounded-[27.86px] justify-center items-center mr-4">
        <Text className='text-white font-bold text-center text-lg  '>Delivery</Text>
      </View>

      
      <View className=" flex flex-row w-[100.00px] h-[37.55px] bg-white opacity-90 rounded-[27.86px] justify-center items-center  ">
        <Text className='text-black font-bold text-center text-lg  '>Pick Up</Text>
      </View>

    </View> */}

export default Header