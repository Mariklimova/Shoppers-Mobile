import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Tabs } from 'expo-router';
import 'react-native-reanimated';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="products" options={{
        title: '',
        tabBarIcon: ({ focused }) => (
          <Entypo name="home" size={30} color={focused ? 'yellow' : 'black'}  />
        
        ),
      }} />

      <Tabs.Screen name="user" options={{
        title: '',
        tabBarIcon: ({ focused }) => (
          <FontAwesome6 name="user-large" size={24} color={focused ? 'yellow' : 'black'} />
        ),
      }} />

      <Tabs.Screen name="cart" options={{
        title: '',
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="shopping-cart" size={30} color={focused ? 'yellow' : 'black'} />
        ),
      }} />

    </Tabs>
  );
}

