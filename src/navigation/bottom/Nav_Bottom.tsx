import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Screen_Home from '../../screens/Screen_Home';
import Screen_setting from '../../screens/Screen_setting';
import Screen_Search from '../../screens/Screen_Search';
import Screen_Account from '../../screens/Screen_Account';

import BottomTabBar from '../../components/BottomTabBar';
import Screen_Post from '../../screens/Screen_Post';


export default function MyTabs() {

    return (
        <Tab.Navigator
        tabBar={(props) => <BottomTabBar {...props} />}
        screenOptions={{
            headerShown: false
          }}>
            <Tab.Screen name="Home" component={Screen_Home} />
            <Tab.Screen name="Search" component={Screen_Search} />
            <Tab.Screen name="Post" component={Screen_Post} />
            <Tab.Screen name="Setting" component={Screen_setting} />
            <Tab.Screen name="Account" component={Screen_Account} />
        </Tab.Navigator>
    );
}