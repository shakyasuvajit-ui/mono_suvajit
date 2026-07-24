import { Pressable, PressableProps, StyleSheet, Text, ViewStyle } from "react-native"

type Props = PressableProps & {
    title: string
    type: 'primary' | 'secondary' | 'outline' | 'danger' | 'disabled'
}

const buttonStyles: Record<Props['type'], ViewStyle> = {
    primary: {
        backgroundColor: 'blue',
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

export function Button({ title, type = 'primary', ...props }: Props) {
    
    return (
        <Pressable style={[buttonStyles[type], styles.common ]} {...props}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}