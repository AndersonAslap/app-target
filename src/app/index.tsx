import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import { HomeHeader } from "@/components/homeHeader";
import { TargetItem } from "@/components/targetItem";
import List from "@/components/list";
import { Button } from "@/components/button";
import { router } from "expo-router";

const mockSummary = {
    total: "R$ 2.680,00",
    input: {label: "Entradas", value: "R$ 6.680,00"},
    output: {label: "Saídas", value: "R$ 80,00"}
};

const mockTargets = [
    {
        id: "1",
        name: "Apple Watch",
        percentage: "50%",
        current: "R$ 580,00",
        target: "R$ 1.790,00"
    },
    {
        id: "2",
        name: "Notebook Dell",
        percentage: "20%",
        current: "R$ 1.000,00",
        target: "R$ 5.000,00"
    },
    {
        id: "3",
        name: "Viagem para Paris",
        percentage: "10%",
        current: "R$ 500,00",
        target: "R$ 5.000,00"
    }
];

export default function Index() {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" />

            <HomeHeader data={mockSummary}/>

            <List 
                title="Metas"
                data={mockTargets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TargetItem data={item}  onPress={() => router.navigate(`/in-progress/${item.id}`)}/>}
                emptyMessage="Nenhuma meta. Toque em nova meta para criar."
                containerStyle={{
                    paddingHorizontal: 24
                }}
            />

            <View style={{ padding: 24, paddingBottom: 32 }}>
                <Button title="Nova meta" onPress={() => router.navigate('/target')} />
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1
    }
});