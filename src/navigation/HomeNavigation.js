import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator>
          <Tab.Screen name="Home" options={{
              headerShown: false,
              tabBarStyle:{marginTop:24,paddingBottom:5, height:60},
              tabBarActiveTintColor:'black',
              tabBarIcon: () => (
                  <Entypo name="aircraft" size={24} color={'black'} />
              )
              }} component={HomeScreen} />
      
    </Tab.Navigator>
  );
}

export default HomeNavigation;