import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {HomeProfile, Gap, ProductCard} from '../../components';
import useStoreProduct from '../../stores/useStoreProduct';

const Home = ({navigation}) => {
  const {getListProduct, listProduct} = useStoreProduct(state => state);
  useEffect(() => {
    getListProduct();
  }, [getListProduct]);
  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View style={styles.content}>
          <Gap height={16} />
          <ScrollView>
            <View style={styles.orderCardContainer}>
              {listProduct.map(item => {
                return (
                  <ProductCard
                    key={item.id}
                    name={item.title}
                    price={item.price}
                    image={{uri: item.image}}
                    onPress={() => navigation.navigate('ProductDetail', item)}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  orderCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
