import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePicture = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.image}></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {height: SPACING.space_36, width: SPACING.space_36},
});

export default ProfilePicture;
