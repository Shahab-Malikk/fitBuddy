import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import * as AnimateAble from 'react-native-animatable';
import { app, database } from '../firebase.config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";



const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth(app);


  const toggleLogin = () => {
    setIsLogin(!isLogin)
  }
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validDomainNames = ["yahoo.com", "gmail.com", "uettaxila.edu.pk"];
    const domain = email.split("@")[1];

    if (!regex.test(email)) {
      setEmailError("Please enter valid email address");
      return false;
    }

    if (!validDomainNames.includes(domain)) {
      setEmailError("Please enter valid domain");
      return false;
    }

    return true;
  };
  const isValidPassword = (password, confirmPassword) => {
    const passwordRegex =
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Please enter password with atleast 8 characters, 1 uppercase letter, 1 number and 1 special case letter"
      );
      return false;

    }
    return true;
  };

  const handleSignUp = () => {
    if (
      email.trim() === "" ||
      password.trim() === ""
    ) {
      setEmailError("Please enter your email and password");
    } else {
      if (isValidEmail(email) && isValidPassword(password)) {
        if (!isLogin) {
          console.log('login')
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;

              console.log(user);
              navigation.navigate('Dashboard')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
            });


        } if (isLogin) {

          console.log('signup')
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigation.navigate('OnBoarding1')

              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
            });


        }

      }
    }
    setEmail("");
    setPassword("");
  };



  return (
    <SafeAreaView className='flex-1 bg-background1'>
      <View className='flex-1  items-center'>
        <View className='flex mt-7 w-[90%] mx-[5%]'>
          <Text className='text-3xl font-semibold text-white capitalize text-center'>Start With Creating Your Account</Text>

        </View>

        <View className='flex-1 mb-8 bg-[#262450] shadow-sm mt-10 rounded-sm w-[90%] mx-[5%]'>
          <AnimateAble.View iterationCount={1} animation='fadeIn' className='flex-1'>
            <ScrollView>

              <View className='mt-5 w-[90%] mx-[5%]'>
                <TextInput style={{ outline: 'none' }} className='mt-4 flex-1 px-1 py-2 border-[#0da6c2] font-normal text-md text-white border-b-2' placeholder="Enter your e-mail" placeholderTextColor='#7b78aa'
                  value={email}
                  onChangeText={(value) => {
                    setEmail(value);
                  }}
                  onFocus={() => {
                    setEmailError("");
                  }}
                ></TextInput>
                {emailError !== "" && (
                  <Text className='text-white text-xs w-[90%] text-center mt-1'>{emailError}</Text>
                )}
              </View>
              <View className='mt-9 flex-row items-center justify-between w-[90%] mx-[5%] border-[#0da6c2] border-b-2'>
                <TextInput style={{ outline: 'none' }} className='mt-4 flex-1 px-1 py-2  font-normal text-md text-white' placeholderTextColor='#7b78aa' placeholder="Enter your password"
                  secureTextEntry={hidePassword}
                  value={password}
                  onChangeText={(value) => {
                    setPassword(value);
                  }}
                  onFocus={() => {
                    setPasswordError("");
                  }}
                ></TextInput>
                <Pressable
                  className=' flex items-center justify-center w-8 h-8 rounded-full bg-[#0DA6C2]'
                  onPress={() => setHidePassword(!hidePassword)}
                >
                  <Icon name={!hidePassword ? "eye-off" : "eye"} size={20} color="#fff" />
                </Pressable>
                {passwordError !== "" && (
                  <Text className='text-white text-xs w-[100%] text-center mt-1'>{passwordError}</Text>
                )}
              </View>


            </ScrollView>
          </AnimateAble.View>
          <TouchableOpacity onPress={handleSignUp} className='w-[90%] mx-[5%] mb-7 rounded-2xl bg-[#0DA6C2]  justify-self-end mt-5 py-4 align-end'><Text className='text-white text-xl font-bold text-center'>{!isLogin ? 'Login' : 'Signup'}</Text></TouchableOpacity>
          {isLogin && <View className='flex-row justify-center mb-4'>
            <Text className='text-white text-center text-sm'>Already have an account? </Text>
            <TouchableOpacity onPress={toggleLogin}><Text className='text-[#0DA6C2] text-center text-sm underline'>Login</Text></TouchableOpacity>
          </View>}
          {!isLogin && <View className='flex-row justify-center mb-4'>
            <Text className='text-white text-center text-sm'>Create New Account  </Text>
            <TouchableOpacity onPress={toggleLogin}><Text className='text-[#0DA6C2] text-center text-sm underline'>SignUp</Text></TouchableOpacity>
          </View>}

        </View>

      </View>
    </SafeAreaView>
  );
}



export default Login;
