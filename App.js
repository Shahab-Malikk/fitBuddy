import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import StartupScreen from './screens/StartupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen1 from './screens/OnBoardingScreen1';
import OnBoardingScreen2 from './screens/OnBoardingScreen2';
import OnBoardingScreen3 from './screens/OnBoardingScreen3';
import OnBoardingScreen4 from './screens/OnBoardingScreen4';
import OnBoardingCompletion from './screens/OnBoardingCompletion';
import Dashboard from './screens/Dashboard';
import { Provider } from 'react-redux';
import store from './store/store';
import AllMeals from './screens/MealsList';
import Meals from './screens/Meals';
import Meal from './screens/Meal';
import SavedMeals from './screens/SavedMeals';
import WorkoutsMainScreen from './screens/WorkoutsMainScreen';
import Workouts from './screens/Workouts';
import Workout from './screens/Workout';
import Login from './screens/Login';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <Provider store={store}>
      <TailwindProvider>
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Startup" component={StartupScreen} options={{
              headerShown: false
            }} />
            <Stack.Screen name="Login" component={Login} options={{
              headerShown: false
            }} />
            <Stack.Screen name="OnBoarding1" component={OnBoardingScreen1} options={{
              headerShown: false
            }} />
            <Stack.Screen name="OnBoarding2" component={OnBoardingScreen2} options={{
              headerShown: false
            }} />
            <Stack.Screen name="OnBoarding3" component={OnBoardingScreen3} options={{
              headerShown: false
            }} />
            <Stack.Screen name="OnBoarding4" component={OnBoardingScreen4} options={{
              headerShown: false
            }} />
            <Stack.Screen name='OnCompletion' component={OnBoardingCompletion} options={{
              headerShown: false
            }} />
            <Stack.Screen name='Dashboard' component={Dashboard} options={{
              headerShown: false
            }} />
            <Stack.Screen name='MealsList' component={AllMeals} options={{
              headerShown: false
            }} />
            <Stack.Screen name='Meals' component={Meals} options={{
              headerShown: false
            }} />
            <Stack.Screen name='Meal' component={Meal} options={{
              headerShown: false
            }} />
            <Stack.Screen name='SavedMeals' component={SavedMeals} options={{
              headerShown: false
            }} />
            <Stack.Screen name='WorkoutsMain' component={WorkoutsMainScreen} options={{
              headerShown: false
            }} />
            <Stack.Screen name='Workouts' component={Workouts} options={{
              headerShown: false
            }} />
            <Stack.Screen name='Workout' component={Workout} options={{
              headerShown: false
            }} />


          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
}


