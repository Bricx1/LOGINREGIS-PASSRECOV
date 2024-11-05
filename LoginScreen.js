// LoginScreen.js
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Checkbox, Text, TextInput } from 'react-native-paper';

function LoginScreen() {
  const navigation = useNavigation(); // Use the useNavigation hook
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleLogin = () => {
    // You can add login logic here, e.g., authentication checks
    console.log('Logging in with:', email, password);
    navigation.navigate('EduServiceHub'); // Navigate to EduServiceHub after login
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <View style={styles.rememberMeContainer}>
        <Checkbox
          status={rememberMe ? 'checked' : 'unchecked'}
          onPress={() => setRememberMe(!rememberMe)}
        />
        <Text style={styles.rememberMeText}>Remember me</Text>
      </View>
      <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001f3f',
    padding: 16,
  },
  input: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rememberMeText: {
    color: '#ffffff',
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: '#00509E',
  },
});

export default LoginScreen; // No need for withNavigation
