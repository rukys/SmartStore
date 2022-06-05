import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput, Loading} from '../../components';
import useStoreUser from '../../stores/useStoreUser';

const SignIn = ({navigation}) => {
  const {loading, postLogin, setLoadingFalse} = useStoreUser(state => state);
  const [state, setState] = useState({
    username: 'mor_2314',
    password: '83r5^_',
  });

  const onSubmit = () => {
    postLogin(state, navigation);
  };

  useEffect(() => {
    setLoadingFalse();
  }, [setLoadingFalse]);
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever product" />
      <View style={styles.container}>
        <TextInput
          label="Username"
          placeholder="Type your username"
          value={state.username}
          onChangeText={username => setState(prev => ({...prev, username}))}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={state.password}
          onChangeText={password => setState(prev => ({...prev, password}))}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={12} />
      </View>
      {loading && <Loading />}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
