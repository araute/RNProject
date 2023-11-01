import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SPACING} from '../theme/theme';

interface GradientBgIconProps {
  name: string;
  color: string;
  size: number;
}
const GradientBgIcon: React.FC<GradientBgIconProps> = ({name, size, color}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.linearGradientBG}
        colors={[
          COLORS.primaryGreyHex,
          COLORS.primaryBlackHex,
        ]}></LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
  },
  linearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default GradientBgIcon;
