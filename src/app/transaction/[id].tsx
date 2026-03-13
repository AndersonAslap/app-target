import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { InputCurrency } from "@/components/inputCurrency";
import { PageHeader } from "@/components/pageHeader";
import { TransactionType } from "@/components/transactionType";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

export default function Transaction() {
    const params = useLocalSearchParams<{id: string}>();

    const [transactionTypeSelected, setTransactionTypeSelected] = useState(TransactionTypes.Input);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <PageHeader 
                title="Nova transação"
                subtitle="A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."
            />

            <View style={{ marginTop: 32, gap: 24 }}>
                <TransactionType selected={transactionTypeSelected} onChange={setTransactionTypeSelected}/>

                <InputCurrency
                    label="Valor (R$)"
                    value={0}
                />

                <Input 
                    label="Motivo (opcional)"
                    placeholder="Ex: Investir em CDB de 110% no banco XPTO"
                />

                <Button title="Salvar"/>
            </View>
        </View>
    )
}