import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Doctor({doctor}) {
    const {name, image} = doctor;
    return (
        <View>
            <Text style={styles.doctorName}>{name}</Text>
            <Image
                source={{
                    uri: `data:image/png;base64,${image}`,
                }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    doctorName: {
      color: 'goldenrod',
      fontSize:30,
      alignItems: 'center',
    },
  });
