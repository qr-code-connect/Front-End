import { ResizeMode, Video } from 'expo-av';
import { router } from 'expo-router';
import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import LogoVideo from '../../../assets/video/IntroLogo.mp4'; // ajuste conforme sua pasta

const Introduction = () => {
  const video = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={LogoVideo}
        style={styles.video}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        isLooping={false}
        isMuted={false}
        onPlaybackStatusUpdate={(status) => {
          if ('didJustFinish' in status && status.didJustFinish) {
            router.replace('/Screen/Login'); 
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // corta o que extrapola
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '48%',
    width: Dimensions.get('window').width * 1.5,
    height: Dimensions.get('window').height * 1.5,
    transform: [
      { translateX: -(Dimensions.get('window').width * 1.5) / 2 },
      { translateY: -(Dimensions.get('window').height * 1.5) / 2 },
    ],
  },
});


export default Introduction;
