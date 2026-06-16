import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

// Import das telas
import Login from '../pages/login';
import Registro from '../pages/registro';
import Cadastro from '../pages/cadastro';
import Dashboard from '../pages/dashboard';
import Relatorio from '../pages/relatorio';

// Navegadores
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MenuSuperior() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        drawerActiveTintColor: '#FF914D',
        drawerInactiveTintColor: '#777',
        drawerIcon: ({ color, size, focused }) => {
          let nomeIcone;

          if (route.name === 'Home') {
            nomeIcone = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cadastro') {
            nomeIcone = focused ? 'person-add' : 'person-add-outline';
          } else if (route.name === 'Relatorio') {
            nomeIcone = focused
              ? 'document-text'
              : 'document-text-outline';
          }

          return (
            <Ionicons
              name={nomeIcone}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Drawer.Screen
        name="Home"
        component={Dashboard}
        options={{ headerTitleAlign: 'center' }}
      />

      <Drawer.Screen
        name="Cadastro"
        component={Cadastro}
      />

      <Drawer.Screen
        name="Relatorio"
        component={Relatorio}
      />
    </Drawer.Navigator>
  );
}

export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Principal"
        component={MenuSuperior}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}