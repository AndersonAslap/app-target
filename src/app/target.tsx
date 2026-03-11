import React from "react";
import { View } from "react-native";
import { PageHeader } from "@/components/pageHeader";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { InputCurrency } from "@/components/inputCurrency";

export default function Target() {
    return (
        <View style={{ flex: 1, padding: 24 }}>
            <PageHeader
                title="Meta"
                subtitle="Economize para alcançar sua meta financeira."
            />

            <View style={{ marginTop: 32, gap: 24 }}>
                <Input
                    label="Nova meta"
                    placeholder="Ex: Viagem para praia, Apple Watch"
                />
                <InputCurrency
                    label="Valor alvo (R$)"
                    value={0}
                />
                <Button title="Salvar" />
            </View>
        </View>
    )
}