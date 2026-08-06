import PageBackground from "@/assets/svg/page_bg.svg";
import { BackButton } from "@/components/back-button";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, ImageSourcePropType, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    },
    headerContainer: {
        
    },
    

});
export default function AddExpense() {
    return (
        <View style={styles.container}>
            <PageBackground style={styles.headerBackground} />
            <SafeAreaView>
                <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <View style={styles.headerContainer} >
                              <BackButton type="light" />
                              <Text style={styles.headerTitle}>Add Expense</Text>
                            </View>
                </TouchableOpacity>
            </View>  
            </SafeAreaView>
            
        </View>
    );
}
    )
}