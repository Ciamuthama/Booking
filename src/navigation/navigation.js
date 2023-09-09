
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeNavigation from './HomeNavigation';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="HomeNavigation" options={{headerShown: false}} component={HomeNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;