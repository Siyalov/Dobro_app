import UserRequests from '../userRequests';
import Form from '../form';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function RefugeesHome() {
   return (
      <Tab.Navigator>
         <Tab.Screen name="Запросы" component={UserRequests} />
         <Tab.Screen name="Новый" component={Form} />
      </Tab.Navigator>
   );
}

export default RefugeesHome;
