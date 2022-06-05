import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-community/async-storage';

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

const useStoreOrder = create(
  log(
    persist(
      (set, get) => ({
        listOrder: [],
        addItemOrder: value => {
          set({listOrder: get().listOrder.concat(value)});
        },
        clearListOrder: () => set({listOrder: []}),
      }),
      {
        name: 'order-storage',
        getStorage: () => AsyncStorage,
      },
    ),
  ),
);

export default useStoreOrder;
