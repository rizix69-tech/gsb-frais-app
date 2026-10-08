import { useState } from "react";
import { useAuth } from "../context/Authcontext";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import Navbar from "../components/Navbar";
import { loginStyles as styles } from "../styles/loginStyles";

export default function LoginScreen() {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

 
  const { loginUser } = useAuth();

  
  const navigation = useNavigation();


  const handleSubmit = () => {
    if (loginUser(login, password)) {
      navigation.navigate("Dashboard"); 
    } else {
      Alert.alert("Identifiants incorrects"); 
    }
  };
  
  return (
    <>
      <Navbar />
      <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>

        <View>
          <Text>Login :</Text>
          <TextInput
            style={styles.input}
            value={login}
            onChangeText={setLogin}
          />
        </View>

        <View>
          <Text>Password :</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </Pressable>
      </View>
    </>
  );
}