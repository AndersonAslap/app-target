import React from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export function Loading() {
    return (
        <ActivityIndicator 
            color={colors.blue[500]}
            style={styles.container} 
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});