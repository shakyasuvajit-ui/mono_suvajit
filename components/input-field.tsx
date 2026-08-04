import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native"

type Props = TextInputProps & {
    label?: string
    error?: string
}

export function InputField({ label, style: inputStyle, error, ...props }: Props) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput placeholderTextColor="#8F949F" style={[styles.input, inputStyle]} {...props} />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 5,
        color:"#5A8C88"
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        // color: 'black',
        fontSize: 14,
        fontWeight: '500',
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
})