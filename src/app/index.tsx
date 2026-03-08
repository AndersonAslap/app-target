import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/components/homeHeader/styles";
import { colors } from "@/theme/colors";

export default function Index() {
    return (
        <LinearGradient 
            colors={[colors.blue["500"], colors.blue["800"]]} 
            style={styles.container}
        >
        </LinearGradient>
    )
}