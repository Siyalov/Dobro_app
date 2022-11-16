import { StatusBar } from "expo-status-bar";
import { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Text, Button } from '@rneui/themed';
import { InputField } from "../../components/InputField";
// import InputField


export default function Form({ navigation }) {

   console.log('Form');
   const [name, setName] = useState('');
   const [helpRequest, setHelpRequest] = useState('');
   const onAddClick = () => {
      const client = { name, phone, city, bio, };
      navigation.navigate('Clients', { newClient: client });
   };




   // https://reactnavigation.org/docs/params/
   return (
      <>
         <Text h2 style={{ textAlign: 'center' }}>Обратиться за помощью</Text>
         <InputField
            head="Имя"
            placeholder="Введите имя"
            info="Вы должны дать нам понять как вас зовут."
            onChangeValue={setName}
            value={name}
         />
         <InputField
            head="Чем вам помочь"
            placeholder="Введите вашу потребность"
            info="Расскажите, что вам нужно."
            onChangeValue={setHelpRequest}
            value={helpRequest}
            multiline={true}
            numberOfLines={4}
         />

         <Text>Обратиться за помощью</Text>
         <Button
            title={"Обратиться \nза помощью"}
            radius={'md'}
            style={{ padding: 16 }}
            onPress={() => navigation.navigate('home')}
         />
      </>
   );
}