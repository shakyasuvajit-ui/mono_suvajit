import Background from '@/assets/svg/onboarding_bg.svg';
import { BackButton } from "@/components/back-button";
import { Button } from '@/components/buttons';
import { InputField } from '@/components/input-field';
import { signIn } from "@/services/firebase";
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';



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
    paddingHorizontal: 14,
  },
    toptext:{ 
        fontSize: 24,
        fontWeight: '600',
        color: "black",
      
    },
    topbelowtext:{
        fontSize: 14,
        fontWeight: '500',
        color: '#5A8C88',
        marginTop: 8,
    },
    inputs:{
        padding: 18,
        gap: 24,
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
        color: "#438883",
        fontSize: 16,
        textDecorationLine: "underline",
    },
    blwbtntext:{
        color: "#444444",
        fontSize: 16,
    },
    logincontainer:{
        alignItems: "center",
        marginTop: 8,
        flexDirection: "row",
        justifyContent: 'center',
    }

});

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fieldsError, setFieldsError] = useState({
        email: '',
        password: '',
    });
    const handleSignIn = async () => {
        try {
            if (!email || !password) {
                setFieldsError({
                    email: !email ? 'Email is required' : '',
                    password: !password ? 'Password is required' : '',
                });
                return;
            }
            setFieldsError({
                email: '',
                password: '',
            });
            setIsLoading(true);
            const user = await signIn(email, password);
            console.log("user", user);
            router.push('/(home)/profile');
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: "Invalid email or password!",
            })
        } finally {
            setIsLoading(false);
        }
    }
    return (
    <View style={style.container}>
        <View style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0,}}>
            <Background/>
        </View>
        <SafeAreaView>
        <View>
            <BackButton />
        </View>
        <View style={style.topContainer}>
            <Text style={style.toptext}>Welcome</Text>
            <Text style={style.toptext}>back 👋</Text>
            <Text style={style.topbelowtext}>Sign in to your account to continue</Text>
        </View>
        <View style={style.inputs}>
            <InputField label="Email" autoCapitalize="none" placeholder="Enter your email" value={email} onChangeText={setEmail} error={fieldsError.email}/>
            <InputField label="Password" autoCapitalize="none" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry error={fieldsError.password}/>
            <Button title="Sign In" type="primary" onPress={handleSignIn} disabled={isLoading} loading={isLoading} />
        
        <View style={style.logincontainer}>
            <Text style={style.blwbtntext}>Dont have an account?</Text> 
            <Link style={style.link} href="/signup">Sign Up</Link>
        </View>        
        </View>
        </SafeAreaView>
    </View>
  );
}
