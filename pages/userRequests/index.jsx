import { useState, useEffect } from 'react';
import { ScrollView } from "react-native";
import { Text, Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RequestPreview from "../../components/RequestPreview";

let requests = [];

/** get from storage */
async function getRequests() {
   const items = await AsyncStorage.getItem('requests');
   if (items) {
      requests = JSON.parse(items);
   }
}
getRequests();

/** save to storage */
async function storeRequests() {
   const jsonValue = JSON.stringify(requests);
   await AsyncStorage.setItem('requests', jsonValue);
}

export default function UserRequests({ navigation, route }) {
   // todo: add filter
   const [filteredRequests, setFilteredRequests] = useState(requests);

   useEffect(() => {
      // on route.params.newRequest update...
      if (route.params.newRequest) {
         // add
         requests.push(route.params.newRequest);
         // create new array from old
         setFilteredRequests([...requests]);
         // prevent duplicates
         route.params.newRequest = null;
         // save
         storeRequests();
      }
   }, [])

   // https://reactnavigation.org/docs/params/
   return (
      <ScrollView>
         <Text h2 style={{ textAlign: 'center' }}>Ваши заявки</Text>


         {
            filteredRequests.map((request, i) => <RequestPreview key={i} request={request} />)
         }
         {/* <Text>Обратиться за помощью</Text> */}
         <Button
            title={"Домой"}
            radius={'md'}
            style={{ padding: 16 }}
            onPress={() => navigation.navigate('home')}
         />
      </ScrollView>
   );
}

