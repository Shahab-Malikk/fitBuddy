import { View, Text, SafeAreaView, TouchableOpacity, Button, ScrollView, Platform } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import BtnGoBack from '../components/BtnGoBack'
import { week1workouts } from '../slices/workoutsSlice'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux'
import { completeWorkout } from '../slices/workoutsSlice'
import { WebView } from 'react-native-webview'
import { Video, ResizeMode } from 'expo-av';
import { unstable_createElement } from 'react-native-web'
import { setTotalTime } from '../slices/workoutsSlice'

const Workout = ({ route }) => {

  function createVideo(attrs) {
    return unstable_createElement("video", attrs);
  }
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const { id, name, sets, day, reps, time, isdone } = route.params ?? {};
  const workouts = useSelector(week1workouts)
  const currentIndex = workouts.findIndex((workout) => workout.id === id);
  const [currentWorkout, setCurrentWorkout] = useState(currentIndex)
  const [timer, setTimer] = useState(workouts[currentIndex].time);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [pausedTimer, setPausedTimer] = useState(0);
  const [videoUrl, setVideoUrl] = useState(workouts[currentIndex].videoUrl);
  const dispatch = useDispatch()


  const nextWorkout = () => {
    if (currentWorkout < workouts.length - 1) {
      setCurrentWorkout((prevWorkout) => prevWorkout + 1);
      setTimer(workouts[currentWorkout + 1].time);
      setIsTimerRunning(false);
      setIsTimerPaused(false);
      setPausedTimer(0);

    }
  }
  const prevWorkout = () => {
    if (currentWorkout > 0) {
      setCurrentWorkout((prevWorkout) => prevWorkout - 1);
      setTimer(workouts[currentWorkout - 1]?.time);
      setIsTimerRunning(false);
      setIsTimerPaused(false);
      setPausedTimer(0);
    }
  }

  const handleTimerToggle = () => {
    if (!isTimerRunning && !isTimerPaused) {
      setIsTimerRunning(true);
    } else if (isTimerRunning && !isTimerPaused) {
      setIsTimerRunning(false);
      setIsTimerPaused(true);
      setPausedTimer(timer);
    } else if (!isTimerRunning && isTimerPaused) {
      setIsTimerRunning(true);
      setIsTimerPaused(false);
    }
  };
  const currentWorkoutData = workouts[currentWorkout]
  useEffect(() => {
    setVideoUrl(currentWorkoutData.videoUrl)
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };

  }, [isTimerRunning, timer, currentWorkout]);


  const formattedTime = `${Math.floor(timer / 60)
    .toString()
    .padStart(2, '0')}:${(timer % 60)
      .toString()
      .padStart(2, '0')}`;

  const filledPercent = (timer / currentWorkoutData.time) * 100;

  if (timer === 0) {
    dispatch(completeWorkout({ id: currentWorkoutData.id }))
    dispatch(setTotalTime(currentWorkoutData.time))
    nextWorkout()
  }

  const attrs = {
    src: require(`../assets/videos/${currentWorkoutData.videoUrl}`),
    poster: "https://www.fillmurray.com/500/360",
    autoplay: "autoplay",
    loop: "loop",

  };

  console.log(currentWorkoutData.videoUrl)



  return (
    <SafeAreaView className='flex-1 bg-background1'>
      <ScrollView className='flex-1'>

        <View className='w-[90%] flex-1 mx-[5%] py-10'>
          <BtnGoBack />
          <Text className='text-white text-xl text-center font-semibold mb-2 mt-2'>Day {currentWorkoutData.day} Workout</Text>
          <View className='mt-4'>{createVideo(attrs)}</View>
          <Text className='text-white text-2xl font-bold mt-4 text-center'>{currentWorkoutData.name}</Text>
          <Text className='text-white text-xs font-semibold mt-2 text-center'>Sets: {currentWorkoutData.sets} Each x{currentWorkoutData.reps}</Text>
          <Text className='text-[#FFD852] text-3xl font-bold mt-4 text-center'>{formattedTime}</Text>
          <View className='flex items-center justify-between mt-4'>
            {isTimerRunning && !currentWorkoutData.isdone &&
              <TouchableOpacity onPress={handleTimerToggle}>
                <Icon name='pause-circle-outline' size={50} color='#FFD852'></Icon>
              </TouchableOpacity>
            }
            {!isTimerRunning && isTimerPaused &&
              <TouchableOpacity onPress={handleTimerToggle}>
                <Icon name='play-circle-outline' size={50} color='#FFD852'></Icon>
              </TouchableOpacity>
            }
            {!isTimerRunning && !isTimerPaused && !currentWorkoutData.isdone &&
              <TouchableOpacity onPress={handleTimerToggle}>
                <Icon name='play-circle-outline' size={50} color='#FFD852'></Icon>
              </TouchableOpacity>
            }
            {
              currentWorkoutData.isdone &&
              <TouchableOpacity onPress={handleTimerToggle}>
                <Icon name='replay' size={50} color='#FFD852'></Icon>
              </TouchableOpacity>
            }
          </View>
          <View style={{ flex: 1, position: 'relative', marginTop: 20, marginBottom: 20 }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${filledPercent}%`,
                height: 10,
                backgroundColor: '#FFD852',
                borderRadius: 6,
              }}

            ></View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: 10,
                backgroundColor: '#fff',
                opacity: 0.1,
                borderRadius: 6,
              }}
            ></View>
          </View>

          <View className='flex-row mt-4 justify-between'>
            {
              !(currentWorkout === 0) && <TouchableOpacity onPress={prevWorkout} className='flex-row items-center' disabled={currentWorkout === 0}>
                <Icon name='chevron-left' size={24} color='#fff'></Icon>
                <Text className='text-white text-xs font-semibold  text-center'>Previous</Text>
              </TouchableOpacity>
            }
            {
              !(currentWorkout === workouts.length - 1) && <TouchableOpacity onPress={nextWorkout} className='flex-row items-center' disabled={currentWorkout === workouts.length - 1}>
                <Text className='text-white text-xs font-semibold  text-center'>Next</Text>
                <Icon name='navigate-next' size={24} color='#fff'></Icon>
              </TouchableOpacity>
            }
          </View>

        </View>
      </ScrollView>



    </SafeAreaView>
  )
}

export default Workout