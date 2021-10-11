import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Details from '../screens/Details';
import Home from '../screens/Home';

const Stack = createStackNavigator();
const colors = ["rgb(219,112,147)"]

const routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                 headerStyle: {
                    backgroundColor: '#ffffff',
                    },
                    tittle: "Todo List",
                    headerTintColor: colors[0],
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: "28px"
                    },
                }}
            >
                <Stack.Screen 
                name='Home' 
                component={Home}
                options={{
                    title: "Tarefas pra fazer",
                  }}
                />
                <Stack.Screen name='Details' component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default routes;



