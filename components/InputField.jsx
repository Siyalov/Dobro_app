import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export function InputField({ head, value, onChangeValue, placeholder, info, multiline, numberOfLines }) {
   return (
      <View style={styles.container}>
         <Text style={styles.header}>{head}</Text>
         <TextInput
            style={styles.input}
            multiline={multiline}
            numberOfLines={numberOfLines}
            onChangeText={onChangeValue}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={'#A3A3A3'}
         />
         {info ? <Text style={styles.info}>{info}</Text> : ''}
      </View>
   );
}

export default InputField;


const styles = StyleSheet.create({
   container: {
      padding: 10,
   },
   input: {
      borderRadius: 16,
      // backgroundColor: 'lightgrey',
      borderColor: "#9fb6c6",
      borderWidth: 1,
      fontSize: 17,
      padding: 12,
      paddingBottom: 16,
      lineHeight: 24,
   },
   header: {
      fontSize: 18,
      marginBottom: 10,
      marginLeft: 16
   },
   info: {
      color: 'grey'
   }
});