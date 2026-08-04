import Background from '@/assets/svg/onboarding_bg.svg';
import { Button } from '@/components/buttons';
import { InputField } from '@/components/input-field';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  top:{
    position: "absolute",
    top: 50,
    left: 14,
  },
  topContainer:{
    position: "absolute",
    top: 90,
    left: 20,
  },
    toptext:{ 
        fontSize: 25,
        fontWeight: '600',
        color: "black",
      
    },
    topbelowtext:{
        fontSize: 15,
        color:"#5A8C88",
        paddingTop: 10,
    },
    inputs:{
        position: "absolute",
        top: 250,
        alignSelf: "center",
        width: "90%",
        left:20
    },
    inputfield:{
        marginTop: 10,
        borderColor: "#C8EDEA",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        width: "95%",
    },
    button:{
        position: "relative",
        width: "90%",
        alignSelf: "center",
        top: -52,
    },
    link:{
        color:"#549B96",
        fontWeight: '400',
        fontSize: 14,
        alignItems: "center",
    },
    blwbtntext:{
        position: "relative",
        top: -36,
        alignItems: "center",
        alignSelf: "center",
    }

});

export default function Signup() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // const handleSignup = () => {
    //     setIsLoading(true);
    //     signup(email, password)
    // }
    return (
    <View style={style.container}>
        <Background/>
        <View style={style.top}>
            <AntDesign name="left" size={24} color="black" />
        </View>
        <View style={style.topContainer}>
            <Text style={style.toptext}>Create</Text>
            <Text style={style.toptext}>Account ✨</Text>
            <Text style={style.topbelowtext}>Join to start tracking your finances</Text>
        </View>
        <View style={style.inputs}>
            <InputField placeholder="Jane Doe"  label='Full Name' style={style.inputfield}/>
            <InputField placeholder="jane.doe@example.com" label='Email Address' style={style.inputfield}/>
            <InputField placeholder="Create a strong password" label='Password' style={style.inputfield}/>
        </View>
        <View>
            <Button title="Create Account" style={style.button} onPress={() => router.push('/login')}/>
                <Text style={style.blwbtntext}>Already have an account? <Text style={style.link} onPress={() => router.push('/login')}>Login</Text>
                </Text>
        </View>
    </View>
  );
}
