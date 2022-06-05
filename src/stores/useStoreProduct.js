import {Alert} from 'react-native';
import create from 'zustand';
import axios from 'axios';
import {constans} from '../utils';

const useStoreProduct = create(set => ({
  listProduct: [],
  loading: false,
  getListProduct: async () => {
    try {
      set({loading: true});
      const response = await axios.get(
        constans.service.base_url + constans.path.product,
      );
      set({listProduct: response?.data, loading: false});
    } catch (error) {
      Alert.alert('Gagal terhubung ke server', error);
      set({loading: false});
    }
  },
  clearListProduct: () => set({listProduct: []}),
}));

export default useStoreProduct;
