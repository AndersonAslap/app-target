import { Button } from "@/components/button";
import List from "@/components/list";
import { PageHeader } from "@/components/pageHeader";
import { Progress } from "@/components/progress";
import { TransactionItem, TransactionProps } from "@/components/transactionItem";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const transactions: TransactionProps[] = [
  {
    id: '1',
    value: 'R$ 20,00',
    date: '12/04/25',
    type: TransactionTypes.Output,
  },
  {
    id: '2',
    value: 'R$ 300,00',
    date: '12/04/25',
    description: 'CDB de 110% no banco XPTO',
    type: TransactionTypes.Input,
  },
]

export default function InProgress() {
    const params = useLocalSearchParams<{id: string}>();

    return (
        <View style={{ flex: 1, padding: 24, gap:32 }}>
            <PageHeader 
                title="Apple Watch" 
                rightButton={{
                    icon: "edit",
                    onPress: () => {}
                }}
            />

            <Progress
                data={{
                    current: "R$ 10,00",
                    target: "R$ 100,00",
                    percentage: 10
                }}
            />

            <List
                title="Transações"
                data={transactions}
                renderItem={({ item }) => (
                    <TransactionItem data={item} onRemove={() => {}} />
                )}
                emptyMessage="Nenhuma transação. Toque em nova transação para guardar seu primeiro dinheiro aqui."
            />

            <Button 
                title="Nova transação"
                onPress={() => router.navigate(`/transaction/${params.id}`)}
            />
        </View>
    )
}