import { useState, useEffect } from 'react';
import { ScrollView } from "react-native";
import { Text, Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RequestPreview from "../../components/RequestPreview";
import InputField from "../../components/InputField";
// import InputField

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
   const [findState, setFindState] = useState('');
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
         onFind(findState);
      }
   }, [])
   // sarch
   const onFind = (e) => {
      setFindState(e);
      setFilteredRequests(
         requests.filter((req) => {
            return (
               req.name.toLowerCase().includes(e.toLowerCase()) ||
               req.phone.toLowerCase().includes(e.toLowerCase()) ||
               req.helpRequest.toLowerCase().includes(e.toLowerCase())
            );
         })
      );
   };

   // https://reactnavigation.org/docs/params/
   return (
      <ScrollView>
         <Text h2 style={{ textAlign: 'center' }}>Ваши заявки</Text>

         <InputField
            onChangeValue={onFind}
            value={findState}
            placeholder={"Поиск"}
         />

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

