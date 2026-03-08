import { fontFamily } from "@/theme/font-family";
import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: "center"}}>
            <Text style={{fontFamily: fontFamily.bold}}>Olá, Aslap</Text>

            <Button 
                title="Target" 
                onPress={() => router.navigate("/target")} 
            />
        </View>
    )
}