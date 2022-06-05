import {Alert} from 'react-native';
import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {constans} from '../utils';

const log = config => (set, get, api) =>
  config(
    (...args) => {
      console.log('  applying', args);
      set(...args);
      console.log('  new state', get());
    },
    get,
    api,
  );

const useStoreUser = create(
  log(
    persist(
      (set, get) => ({
        token: '',
        name: 'Ruky Sektiawan',
        phone: '089603153944',
        address: [],
        loading: false,
        postLogin: async (payload, navigation) => {
          try {
            set({loading: true});
            const response = await axios.post(
              constans.service.base_url + constans.path.login,
              payload,
            );
            set({token: response?.data?.token, loading: false});
            navigation.replace('MainApp');
          } catch (error) {
            Alert.alert('Gagal SignIn', error);
            set({loading: false});
          }
        },
        postLogout: () => set({token: ''}),
        setLoadingFalse: () => set({loading: false}),
        setAddress: value => set({address: value}),
      }),
      {
        name: 'user-storage',
        getStorage: () => AsyncStorage,
      },
    ),
  ),
);

export default useStoreUser;
