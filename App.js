import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native';
import { useState } from "react";
import { TouchableHighlight } from 'react-native'



// Splash Screen
const SplashScreen = () => {
// export default function SplashScreen() {
  
  return (
      <View style={splash.container}>
        <Image
              style={splash.image}
              source={require('./assets/images/Brainiac.png')}/>
         <Text style={splash.txt}> Test2</Text>     
      </View>
  );
}



// Sign Up page
export default function App () {
// const App = () => {
  const {firstname , lastname, email, password, compass,setFirstName,setLastName,setPassword,setEmail,setCompass} = useState('');
 return (
          <View style={styles.container}>
              <Image
              style={styles.image}
              source={require('./assets/images/regi.jpg')}/>

              <Text
              style={styles.label}>Sign Up</Text>

              <TextInput
              style={styles.input}
              placeholder={'First Name'}
              value={firstname}
              onChangeText={(firstname) => setFirstName(firstname)}></TextInput>

              <TextInput
              style={styles.input}
              placeholder={'Last Name'}
              value={lastname}
              onChangeText={(lastname) => setLastName(lastname)}></TextInput>

              <TextInput
              style={styles.input}
              placeholder={'Email'}
              value={email}
              onChangeText={(email) => setEmail(email)}></TextInput>

              <TextInput
              style={styles.input}
              placeholder={'Password'}
              value={password}
              onChangeText={(password) => setPassword(password)}></TextInput>

              <TextInput
              style={styles.input}
              placeholder={'Confirm Password'}
              value={compass}
              onChangeText={(compass) => setCompass(compass)}></TextInput>

              {/* <View>
                <Button
                    style={styles.button}
                    title={'Sign Up'}
                    onPress={() => alert('Sign Up Button Clicked')} />
              </View> */}
              <TouchableHighlight style={styles.button} title={'Sign Up'} onPress={() => {}}>
                <Text style={styles.text}> Sign Up </Text>
              </TouchableHighlight>

              <View style={{flexDirection : 'row'}}>
                <Text style={{marginTop: 20, fontSize: 15}}>Already have an account?</Text>
                <Text style={{marginTop: 20, fontSize: 15, color: 'blue'}}> Sign In</Text>
              </View>
    </View>
  );
}

// Login page
// export default function Login () {
const Login = () => {
  const {email, password,setPassword,setEmail} = useState('');
  return (
          <View style={login.container}>
          
            <Image
              style={login.image}
              source={require('./assets/images/login.jpg')}/>
          
              <Text
              style={login.label}>Login</Text>
          
              <Text style={{padding: 10}}>
                Welcome back to your account
              </Text>
        
              <TextInput
              style={login.input}
              placeholder={'Enter Your Email'}
              value={email}
              onChangeText={(email) => setEmail(email)}>
              </TextInput>
          
              <TextInput
              style={login.input}
              placeholder={'Enter Your Password'}
              value={password}
              onChangeText={(password) => setPassword(password)}>
              </TextInput>
        
              <View >
                <Text style={{marginTop: 20, fontSize: 15, color: 'blue'}}>Forgot Password?</Text>
              </View>
          
              <View style={{ padding: 20, marginTop:15}}>
              <Button
              style={{marginTop: 50, width: 300, height: 40, backgroundColor: 'blue', color: 'white', borderRadius: 15}}
              title={'Login'}
              onPress={() => alert('Login Button Clicked')}></Button></View>
        

              <View style={{flexDirection : 'row'}}>
                <Text style={{marginTop: 20, fontSize: 15}}>Don't have an account?</Text>
                <Text style={{marginTop: 20, fontSize: 15, color: 'blue'}}> Sign Up</Text>
              </View>

          </View>
   );
  }


// Change Password Page
// export default function ChangePass () {
const ChangePass = () => {
  const {password, compass,setPassword,setCompass} = useState('');
    return (
            <View style={ChangeP.container}>

              <Image
              style={ChangeP.image}
              source={require('./assets/images/changepass.jpg')}/>

              <Text
              style={ChangeP.label}>Change Password</Text>

              <Text style={{padding: 10}}>
                Change password for your account
              </Text>

              <TextInput
              style={ChangeP.input}
              placeholder={'Current Password'}
              value={password}
              onChangeText={(password) => setPassword(password)}>
              </TextInput>

              <TextInput
              style={ChangeP.input}
              placeholder={'New Password'}
              value={password}
              onChangeText={(password) => setPassword(password)}>
              </TextInput>

              <TextInput
              style={ChangeP.input}
              placeholder={'Confirm Password'}
              value={compass}
              onChangeText={(compass) => setCompass(compass)}>
              </TextInput>

              <Button
              style={{marginTop: 50, width: 300, height: 40, backgroundColor: 'blue', color: 'white', borderRadius: 15}}
              title={'Change Password'}
              onPress={() => alert('Change Password Button Clicked')}></Button>
          
            </View>
  );
}


// Forgotten Password

// export default function ForgottenPass () {
const ForgottenPass = () => {
  const {email,setEmail} = useState('');
    return (

            <View style={ForgotP.container}>

              <Image
              style={ForgotP.image}
              source={require('./assets/images/fgpass.jpg')}/>

              <Text
              style={ForgotP.label}>Forgot Password?</Text>

              <Text style={{padding: 10}}> 
                  Enter the Email Address Associated
                </Text>

              <Text>
                with your account 
              </Text>

              <TextInput
              style={ForgotP.input}
              placeholder={'Email'}
              value={email}
              onChangeText={(email) => setEmail(email)}></TextInput>

              <Button
              style={{marginTop: 50, width: 300, height: 40, backgroundColor: 'blue', color: 'white', borderRadius: 15}}
              title={'Send Otp'}
              onPress={() => alert('Send Otp Button Clicked')}></Button>
            </View>
  );
} 
  
// Splash screen property
const splash = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems : 'center',
  },
  image : {
    height : 250,
    width : 250,
    alignItems : 'center',
    alignSelf : 'center',
  },
  txt : {
    fontFamily:'sans-serif',
    fontWeight:"600",
    textAlign :"center",
    textTransform: "uppercase",
    letterSpacing:.7,    
  },
});

// Sign Up Prorperty
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  image:{
    height: 200,
    width: 350,
    marginTop: 50,
  },

  label :{
    fontSize: 30,
    color: 'blue',
    marginTop: 20,
    fontStyle: 'bold',
  },
  input:{
    height: 40,
    width: 300,
    padding: 5,
    marginTop:20,
    border : 'solid blue',
    borderRadius: 15, 
  },
  button: {
    marginTop: 40, 
    width: 250, 
    padding : 20,
    height: 40, 
    backgroundColor: 'blue', 
    color: 'white',
  },  
  text: {
    fontSize: 20,
    padding: 12,
    },

});

// Login property
const login = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image:{
    height: 200,
    width: 350,
    marginTop: 50,
  },
  label :{
    fontSize: 30,
    color: 'blue',
    marginTop: 20,
    fontStyle: 'bold',
  },
  input:{
    height: 40,
    width: 300,
    padding: 5,
    marginTop:20,
    border : 'solid blue',
    borderRadius: 15, 
  },
});

// Change Password Property
const ChangeP = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  image:{

    height: 200,
    width: 350,
    marginTop: 50,

  },

  label :{
    fontSize: 30,
    color: 'blue',
    marginTop: 20,
    fontStyle: 'bold',
  },
  input:{
    height: 40,
    width: 300,
    padding: 5,
    marginTop:20,
    border : 'solid blue',
    borderRadius: 15, 
  },

});

// Forgotten Password Property
const ForgotP = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  image:{

    height: 200,
    width: 350,
    marginTop: 50,

  },

  label :{
    fontSize: 30,
    color: 'blue',
    marginTop: 20,
    fontStyle: 'bold',
  },
  input:{
    height: 40,
    width: 300,
    padding: 5,
    marginTop:20,
    border : 'solid blue',
    borderRadius: 15, 
  },

});
