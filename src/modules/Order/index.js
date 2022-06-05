import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {EmptyOrder, Header, OrderTabSection} from '../../components';
import useStoreOrder from '../../stores/useStoreOrder';

const Order = () => {
  const {listOrder} = useStoreOrder(state => state);
  useEffect(() => {}, []);

  return (
    <View style={styles.page}>
      {listOrder.length === 0 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subTitle="Wait for the best product" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  tabContainer: {flex: 1, marginTop: 24},
});
