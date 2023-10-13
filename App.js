import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactUsReducer from './store'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SubmittedScreen from './scenes/success';
import ContactUs from './scenes/ContactUs';

const App = () => {
  const Stack = createNativeStackNavigator();
  
  const store = configureStore({
    reducer: {
      contactUs: contactUsReducer,
    },
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ContactUs">
          <Stack.Screen name="ContactUs" component={ContactUs} options={{ title: 'Contact Us Form' }} />
          <Stack.Screen name="Submitted" component={SubmittedScreen} options={{ title: 'Submitted Successfully' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;