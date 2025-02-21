import { AuthProvider } from "@/context/authContext";
import Login from "@/screens/auth/Login";
import Register from "@/screens/auth/Register";
import Home from "@/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Initialize the stack navigator
const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <AuthProvider>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};

export default Index;
