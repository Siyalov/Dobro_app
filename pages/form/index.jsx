import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, Button } from '@rneui/themed';
import { InputField } from "../../components/InputField";
// import InputField


export default function Form({ navigation, route }) {
   // https://reactnavigation.org/docs/params/
   return (
      <>
         <Text h2 style={{ textAlign: 'center' }}>Обратиться за помощью</Text>
         <InputField head="Имя" placeholder="Введите имя" info="Вы должны дать нам понять как вас зовут." />
         <InputField
            head="Чем вам помочь"
            placeholder="Введите вашу потребность"
            info="Расскажите, что вам нужно."
            multiline
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