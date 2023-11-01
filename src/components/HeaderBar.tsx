import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBgIcon from './GradientBGIcon';
import ProfilePicture from './ProfilePicture';

interface HeaderBarProps {
  title?: string;
}
const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <GradientBgIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}></GradientBgIcon>
      <Text style={styles.headerText}>{title}</Text>
      <ProfilePicture></ProfilePicture>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
