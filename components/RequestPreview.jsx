import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export function RequestPreview({ request }) {
   return (
      <View style={styles.container}>
         <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{request.name}</Text>
         <Text style={{}}>{request.helpRequest}</Text>
      </View>
   );
}

export default RequestPreview;

const styles = StyleSheet.create({
   container: {
      margin: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#000000"
   }
})