import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PaymentFooter from '../components/PaymentFooter';

const CartScreen = ({navigation}) => {
  const cartList = useStore((state: any) => state.CartList);
  const cartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const buttonPressHandler = () => {
    navigation.push('Payment');
  };
  const tabBarHeight = useBottomTabBarHeight();
  console.log('cartlist = ' + cartList.length);
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Cart"></HeaderBar>
            {cartList.length === 0 ? (
              <EmptyListAnimation title={'Cart is Empty'}></EmptyListAnimation>
            ) : (
              <View style={styles.listItemContainer}>
                {cartList.map(data => (
                  <TouchableOpacity
                    onPress={() => {}}
                    key={data.id}></TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          {cartList.length !== 0 ? (
            <PaymentFooter
              price={{price: cartPrice, currency: '$'}}
              buttonPressHandler={buttonPressHandler}
              buttonTitle={'Pay'}></PaymentFooter>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {flex: 1, backgroundColor: COLORS.primaryBlackHex},
  scrollViewFlex: {flexGrow: 1},
  scrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemContainer: {flex: 1},
  listItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
export default CartScreen;
