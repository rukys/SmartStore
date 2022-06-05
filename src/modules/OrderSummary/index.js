import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Gap,
  Header,
  ItemListProduct,
  ItemValue,
  Select,
} from '../../components';
import useStoreOrder from '../../stores/useStoreOrder';
import useStoreUser from '../../stores/useStoreUser';
// import {getData, showMessage} from '../../utils';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction} = route.params;
  const {addItemOrder} = useStoreOrder(state => state);
  const {name, phone} = useStoreUser(state => state);
  const [isCourier, setIsCourier] = useState('');
  const [isPayment, setIsPayment] = useState('');
  const [isAddress, setIsAddress] = useState('');

  const onCheckout = () => {
    if (isCourier === '' || isPayment === '' || isAddress === '') {
    } else {
      const data = {
        item: {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
        },
        transaction: {
          totalItem: transaction.totalItem,
          totalPrice: transaction.totalPrice,
          courier: isCourier,
          payment: isPayment,
          address: isAddress,
        },
        user: {
          name: name,
          phone: phone,
          address: isAddress,
        },
        status: 'SUCCESS',
      };
      addItemOrder(data);
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  };

  return (
    <ScrollView>
      <Header
        title="Order Summary"
        subTitle="You deserve better product"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Select
          type={'courier'}
          label={'Courier'}
          value={isCourier}
          onSelectChange={value => setIsCourier(value)}
        />
        <Gap height={16} />
        <Select
          type={'payment'}
          label={'Payment'}
          value={isPayment}
          onSelectChange={value => setIsPayment(value)}
        />
        <Gap height={16} />
        <Select
          type={'address'}
          label={'Address'}
          value={isAddress}
          onSelectChange={value => setIsAddress(value)}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListProduct
          type="order-summary"
          name={item.name}
          price={item.price}
          items={transaction.totalItem}
          image={{uri: item.image}}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={item.name}
          value={transaction.totalPrice}
          type="currency"
        />
        <ItemValue
          label="Total Price"
          value={transaction.totalPrice}
          valueColor="#1ABC9C"
          type="currency"
        />
        <Gap height={8} />
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value={name} />
        <ItemValue label="Phone No." value={phone} />
        <ItemValue label="Address" value={isAddress} />
      </View>
      <View style={styles.button}>
        <Button text="Checkout Now" onPress={onCheckout} />
      </View>
      <Gap height={24} />
    </ScrollView>
  );
};

export default OrderSummary;

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
