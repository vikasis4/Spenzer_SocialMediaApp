import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';


const BottomNavAni = ({ currentPosition }: any) => {

  const linear = useSharedValue<any>('3%');
  const animatedChanged = useAnimatedStyle(() => ({
    left: linear.value,
  }));

  React.useEffect(() => {
    linear.value =
      withTiming(currentPosition, {
        duration: 500,
        easing: Easing.bounce,
      })
  }, [currentPosition])

  return (
    (
      currentPosition === '50%' ? null
        :
        <Animated.View style={[styles.bar, animatedChanged]}></Animated.View>
    )
  )
}

export default BottomNavAni

const styles = StyleSheet.create({
  bar: {
    height: 4,
    width: 50,
    backgroundColor: 'gold',
    borderRadius: 6,
    position: 'absolute',
    top: 0,
    zIndex: 10
  },
})