// import UserRequests from '../userRequests';
import Login from '../login';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function RefugeesHome() {
   return (
      <Tab.Navigator>
         <Tab.Screen name="Сделать пожертвование" component={Login} />
         {/* <Tab.Screen name="Новый" component={Form} /> */}
      </Tab.Navigator>
   );
}

export default RefugeesHome;
