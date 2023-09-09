import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator>
          <Tab.Screen name="Home" options={{
              headerShown: false,
              tabBarIcon: {
              
          }}} component={HomeScreen} />
      
    </Tab.Navigator>
  );
}

export default HomeNavigation;