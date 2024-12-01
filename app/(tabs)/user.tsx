import { Tabs } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="/" />
    </Tabs>
  );
}