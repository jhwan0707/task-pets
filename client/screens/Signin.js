import React, { useState } from 'react';
import { View, Text } from 'react-native';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios';
import Logo from '../components/auth/Logo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { signin } from '../../server/controllers/auth';

const Signin = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true)
        if (!email || !password) {
            alert("All fields are required!");
            setLoading(false);
            return;
        }
        try {
            const {data} = await axios.post('http://localhost:8000/api/signin', {
                email, 
                password
            });
            setLoading(false);
            console.log('SIGN IN SUCCESS =>', data);
            alert("Sign In successful");
        } catch (err) {
            alert('Sign up failed, try again.')
            console.log(err)
            setLoading(false);
        }
    }

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle={{ 
                flex: 1, 
                justifyContent: 'center',
            }}
        >
            <View style={{ marginVertical: 100 }}>
                <Logo />
                <Text style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 25, 
                    marginBottom: 20,
                }} >
                    Sign In
                </Text>
                <UserInput 
                    name="EMAIL:" 
                    name2="email"
                    value={email} 
                    setValue={setEmail}
                    autoCompleteType="email"
                    keyboardType="email-address"
                />
                <UserInput 
                    name="PASSWORD:" 
                    name2="password"
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry={true}
                    autoCompleteType="password"
                />
                <SubmitButton 
                    title="Sign In" 
                    handleSubmit={handleSubmit} 
                    loading={loading}
                />
                <Text style={{
                    textAlign: 'center',
                    fontSize: 13
                }}>
                    New Here? <Text style={{
                        fontWeight: 'bold',
                        fontSize: 13,
                        textAlign: 'center',
                        color: '#ff2222',
                    }} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
                </Text>
                <Text style={{ 
                    marginTop: 6,
                    fontSize: 13,
                    textAlign: 'center',
                    color: '#ff2222',
                    fontWeight: 'bold',
                }}>
                    Forgot Password?
                </Text>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Signin;

