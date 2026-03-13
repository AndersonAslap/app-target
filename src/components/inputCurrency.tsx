import React from "react";

import { Text, View, StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/theme'
import Input, { CurrencyInputProps } from "react-native-currency-input";

type Props = CurrencyInputProps & {
  label: string
}

export function InputCurrency({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Input
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
  },
  label: {
    color: colors.gray[600],
    fontFamily: fontFamily.medium,
    fontSize: 12,
  },
  input: {
    color: colors.black,
    fontFamily: fontFamily.regular,
    fontSize: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
  },
})