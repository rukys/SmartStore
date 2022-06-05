import React from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';

const Select = ({label, value, type, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        {type === 'courier' ? (
          <Picker
            selectedValue={value}
            onValueChange={itemValue => onSelectChange(itemValue)}>
            <Picker.Item label="- Choose Courier -" value="" />
            <Picker.Item label="JNE" value="JNE" />
            <Picker.Item label="SiCepat" value="SiCepat" />
            <Picker.Item label="J&T Express" value="J&T Express" />
            <Picker.Item label="Ninja Express" value="Ninja Express" />
            <Picker.Item label="Tiki" value="Tiki" />
          </Picker>
        ) : type === 'payment' ? (
          <Picker
            selectedValue={value}
            onValueChange={itemValue => onSelectChange(itemValue)}>
            <Picker.Item label="- Choose Payment Method -" value="" />
            <Picker.Item label="Bank BCA" value="Bank BCA" />
            <Picker.Item label="Bank Mandiri" value="Bank Mandiri" />
            <Picker.Item label="Bank BNI" value="Bank BNI" />
            <Picker.Item label="Ovo" value="Ovo" />
            <Picker.Item label="Gopay" value="Gopay" />
            <Picker.Item label="Dana" value="Dana" />
            <Picker.Item label="Indomaret" value="Indomaret" />
            <Picker.Item label="Alfamart" value="Alfamart" />
          </Picker>
        ) : (
          <Picker
            selectedValue={value}
            onValueChange={itemValue => onSelectChange(itemValue)}>
            <Picker.Item label="- Choose Address Saved -" value="" />
            <Picker.Item label="Rumah" value="Rumah" />
          </Picker>
        )}
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
