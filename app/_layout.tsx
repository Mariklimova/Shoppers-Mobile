import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';


export default function RootLayout() {
  const [loaded] = useFonts({
    InterRegular: require('../assets/fonts/Inter_24pt-Regular.ttf'),
    InterBold: require('../assets/fonts/Inter_28pt-Bold.ttf'),
    InterLight: require('../assets/fonts/Inter_18pt-Light.ttf'),
    InterMedium: require('../assets/fonts/Inter_18pt-Medium.ttf'),
    InterSemiBold: require('../assets/fonts/Inter_18pt-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="/" />
        <Stack.Screen name="/signup" />
        <Stack.Screen name="/user" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="/(tabs)" />
      </Stack>
  );
}
