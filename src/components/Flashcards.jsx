import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeckScreen from './DeckScreen';
import ReviewScreen from './ReviewScreen';
import NewCard from './NewCardScreen';
import Logo from './Header/Logo';

const Stack = createStackNavigator();

function Flashcards() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerLeft: () => <Logo />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={DeckScreen}
          options={{ title: 'All Decks' }}
        />
        <Stack.Screen
          name="Review"
          component={ReviewScreen}
        />
        <Stack.Screen
          name="CardCreation"
          component={NewCard}
          options={{ title: 'Create Card' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Flashcards;
