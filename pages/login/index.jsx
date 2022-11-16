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
   const [phone, setPhone] = useState('');
   const onAddClick = () => {
      const client = { name, phone, helpRequest };
      navigation.navigate('userRequests', { newRequest: client });
   };




   // https://reactnavigation.org/docs/params/
   return (
      <>
         <Text h2 style={{ textAlign: 'center' }}>Чем Вы можете помочь?</Text>
         <InputField
            head="Имя/Организация"
            placeholder="Введите имя"
            info="Вы должны дать нам понять как вас зовут."
            onChangeValue={setName}
            value={name}
         />
         <InputField
            head="Номер телефона"
            placeholder="+358 0 000 000"
            info="Как с вами можно связаться?"
            onChangeValue={setPhone}
            value={phone}
         />
         <InputField
            head="Чем вы можете помочь беженцам"
            placeholder="Введите информацию о возможной помощи"
            info="Расскажите, чем вы можете помочь"
            onChangeValue={setHelpRequest}
            value={helpRequest}
            multiline={true}
            numberOfLines={4}
         />

         {/* <Text>Обратиться за помощью</Text> */}
         <Button
            title={"Отправить \nинформацию"}
            radius={'md'}
            style={{ padding: 16 }}
            onPress={onAddClick}
         />
      </>
   );
}