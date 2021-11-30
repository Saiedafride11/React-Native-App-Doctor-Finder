import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Doctor from './Doctor';

export default function Doctors() {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('https://tranquil-fortress-32370.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <View>
            <Text>This is Doctor {doctors.length}</Text>
            <ScrollView>
                {
                    doctors.map(doctors => <Doctor doctors={doctors} key={doctor._id}></Doctor>)
                }
            </ScrollView>
        </View>
    )
}
