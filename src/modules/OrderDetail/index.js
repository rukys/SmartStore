import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Header, ItemListProduct, ItemValue} from '../../components';

const OrderDetail = ({route, navigation}) => {
  const order = route.params;
  return (
    <ScrollView>
      <Header
        title="Detail"
        subTitle="You deserve better product"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListProduct
          type="order-summary"
          name={order.item.name}
          price={order.item.price}
          items={order.transaction.totalItem}
          image={{uri: order.item.image}}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={order.item.name}
          value={order.item.price * order.transaction.totalItem}
          type="currency"
        />
        <ItemValue label="Courier" value={order.transaction.courier} />
        <ItemValue label="Payment" value={order.transaction.payment} />
        <ItemValue
          label="Total Price"
          value={order.transaction.totalPrice}
          valueColor="#1ABC9C"
          type="currency"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value={order.user.name} />
        <ItemValue label="Phone No." value={order.user.phone} />
        <ItemValue label="Address" value={order.user.address} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue
          label={`#${12144435}`}
          value={order.status}
          valueColor={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
