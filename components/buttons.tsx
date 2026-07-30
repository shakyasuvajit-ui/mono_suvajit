import { Pressable, PressableProps, StyleSheet, Text, ViewStyle, TextStyle, StyleProp } from "react-native"

type Props = PressableProps & {
    title: string
    type: 'primary' | 'secondary' | 'outline' | 'danger' | 'disabled'
    textStyle?: StyleProp<TextStyle>
}

const buttonStyles: Record<Props['type'], ViewStyle> = {
    primary: {
        backgroundColor: 'lightblue',
    },
    secondary: {
        backgroundColor: 'green',
    },
    outline: {
        borderWidth: 1,
        borderColor: 'blue',
    },
    danger: {
        backgroundColor: 'red',
    },
    disabled: {
        backgroundColor: 'gray',
    },
} as const

const styles = StyleSheet.create({
    common: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        margin:10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export function Button({ title, type = 'primary', style, textStyle, ...props }: Props) {
    return (
        <Pressable style={[styles.common, buttonStyles[type], style]as StyleProp<ViewStyle>} {...props}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    )
}