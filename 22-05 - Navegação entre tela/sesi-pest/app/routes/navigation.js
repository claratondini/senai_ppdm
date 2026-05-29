import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonIcons from '@expo/vector-icons/Ionicons';

// páginas
import Login from '../pages/login';
import Atendimentos from '../pages/atendimentos';
import Profissionais from '../pages/profissionais';
import Registro from '../pages/registro';

// navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Tabs() {

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({

                headerShown: true,
                tabBarActiveTintColor: '#FF914D',
                tabBarInactiveTintColor: '#777',

                tabBarIcon: ({ color, size, focused }) => {

                    let iconName = 'ellipse-outline';

                    if (route.name === 'Atendimentos') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    }

                    if (route.name === 'Profissionais') {
                        iconName = focused ? 'people' : 'people-outline';
                    }

                    return (
                        <IonIcons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },

            })}
        >

            <Tab.Screen
                name='Atendimentos'
                component={Atendimentos}
            />

            <Tab.Screen
                name='Profissionais'
                component={Profissionais}
            />

        </Tab.Navigator>

    );
}

function MenuSuperior() {

    return (

        <Drawer.Navigator
            screenOptions={({ route }) => ({

                headerShown: true,
                drawerActiveTintColor: '#FF914D',
                drawerInactiveTintColor: '#777',

                drawerIcon: ({ color, size, focused }) => {

                    let iconName = 'ellipse-outline';

                    if (route.name === 'Inicio') {
                        iconName = focused ? 'paw' : 'paw-outline';
                    }

                    if (route.name === 'Profissionais') {
                        iconName = focused ? 'people' : 'people-outline';
                    }

                    return (
                        <IonIcons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },

            })}
        >

            <Drawer.Screen
                name='Inicio'
                component={Tabs}
            />

            <Drawer.Screen
                name='Atendimentos'
                component={Atendimentos}
            />

            <Drawer.Screen
                name='Profissionais'
                component={Profissionais}
            />

        </Drawer.Navigator>

    );
}

export default function Rotas() {

    return (

        <Stack.Navigator>

            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Registro'
                component={Registro}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Principal'
                component={MenuSuperior}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>

    );
}
