import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, Button } from '@rneui/themed';


function Row({ children }) {
   return (
      <View style={styles.row}>
         {children}
      </View>)
}

export default function Home({ navigation }) {

   return (
      <View style={{
         flex: 1,
         // backgroundColor: "#fff",
         alignItems: "center",
         justifyContent: "center",
      }}>
         <Text h3 style={{ marginBottom: 32 }}>Проект помощи беженцам</Text>
         <Text h4 style={{ textAlign: 'center', marginBottom: 32, padding: 8 }}>Беженцы сталкиваются с 1000 трудностей на новом месте. В тоже самое время огромное количество компаний и людей обладают ресурсам, которые зачастую могут решить эти проблемы вынужденных переселенцев одним нажатием кнопки.
         </Text>
         <Row>
            <Button
               radius={'md'}
               title={"Обратиться \nза помощью"}
               style={{ paddingRight: 16 }}
               onPress={() => navigation.navigate('form')}
            />
            <Button radius={'md'} title={"Стать \nволонтером"} />
         </Row>

         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
   row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
   }
});
