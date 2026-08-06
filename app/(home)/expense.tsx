import { TouchableOpacity, StyleSheet, Text, View, ScrollView, ImageSourcePropType, Image } from "react-native";
import PageBackground from "@/assets/svg/page_bg.svg";
import { BackButton } from "@/components/back-button";
import { SafeAreaView } from "react-native-safe-area-context";
import  Add  from "@/assets/svg/add_logo.svg";
import  Pay  from "@/assets/svg/pay_logo.svg";

const styles = StyleSheet.create({
  container: {
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center',
    flex: 1,
    marginRight: 48
  },
  transactionsContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    marginTop: 59,
  },
  balanceContainer: {
    alignItems: 'center',
    marginTop:30,
  },
  balanceTitle: {
    fontSize: 16,
    color:"#666666",
    marginBottom: 12,
  },
  balanceAmount: {
    fontSize:30,
  fontWeight: '700',
},
  transactionsLogoContainer:{
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop:40
  },
  addLogoContainer:{
    alignItems: 'center',
    marginRight: 15,

  },
  payLogoContainer:{
    alignItems: 'center',
    marginLeft: 15,
  },
  
  selectionContainer:{
      width: '100%',
      marginTop: 60,
    },
  selectionOption:{
    backgroundColor: '#F4F6F6',
     height:48,
      borderRadius: 40, 
  },
  transactions:{
    alignSelf: 'center',
    width: '100%',
    marginTop: 25,
    height: "100%",
  },
  iconContainer:{
    width:50, 
    height:50,
    backgroundColor: '#F0F6F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

  },
  transactionContainer:{
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  transactionNameandDate:{
    alignItems:"flex-start",
    flexDirection: 'column',
    marginLeft: 9,

  },
  transactionTitle:{
    fontSize: 16,
    fontWeight: '500',
  },
  transactionDate:{
    fontSize: 13,
    fontWeight: '400',
    color: '#666666',
  },
  transactionAmount:{
    fontSize: 18,
    fontWeight: '600',
    alignItems: 'center',
    flex: 1,
    textAlign: 'right',
  },
  positiveAmount:{
    color:"#25A969"
  },
  negativeAmount:{
    color:"#F95B51"
  }

  
});


export default function Expense() {
    // const router = useRouter();
  return (
    <View style={styles.container} >
      <PageBackground style={styles.headerBackground} />
      <SafeAreaView style={styles.container} >
        <View style={styles.headerContainer} >
          <BackButton type="light" />
          <Text style={styles.headerTitle}>Transactions</Text>
        </View>
        <View style={styles.transactionsContainer} >
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceTitle}>Total Balance</Text>
            <Text style={styles.balanceAmount}>$2,548.00</Text>
        </View>
          <View style={styles.transactionsLogoContainer}>
            <TouchableOpacity style={styles.addLogoContainer}>
              <Add/>
              <Text>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.payLogoContainer}>
              <Pay/>
              <Text>Pay</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.selectionContainer}>
            <View style={styles.selectionOption}></View>
          </View>
          <ScrollView style={styles.transactions}>
              <TransactionMenus/>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
function TransactionMenus() {
  const items: { title: string, icon: ImageSourcePropType, date:string, amount:string, onPress: () => void }[]=[
  {
    title:"Upwork",
    icon: require('@/assets/svg/images/upwork.png'),
    date: "Today",
    amount: "+$850.00",
    onPress: () =>{ console.log("Upwork pressed") }
  },
  {
  title:"Transfer",
    icon: require('@/assets/svg/images/transfer.png'),
    date: "Yesterday",
    amount: "-$85.00",
    onPress: () =>{ console.log("Transfer pressed") }},
  {
  title:"Paypal",
    icon: require('@/assets/svg/images/paypal.png'),
    date: "Jan 30, 2022",
    amount: "+$1,406.00",
    onPress: () =>{ console.log("Paypal pressed") }},
   {
  title:"Youtube",
    icon: require('@/assets/svg/images/youtube.png'),
    date: "Jan 16, 2022",
    amount: "-$17.99",
    onPress: () =>{ console.log("Youtube pressed") }} 
]
  return (
      <View>{
        items.map((item, index) => {
          const isIncome = item.amount.trim().startsWith('+');

          return (
            <TouchableOpacity key={index} onPress={item.onPress} style={styles.transactionContainer}>
              <View style={styles.iconContainer}>
                <Image source={item.icon}/>
              </View>
              <View style={styles.transactionNameandDate}>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
              <Text style={[styles.transactionAmount, isIncome ? styles.positiveAmount : styles.negativeAmount]}>{item.amount}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
  );
}
function TransactionMenu({title, icon, date, amount, onpress }:{title:string, icon:ImageSourcePropType, date:string, amount:string, onpress: () => void}) {
  const isIncome = amount.trim().startsWith('+');
  return (
    <TouchableOpacity onPress={onpress} style={styles.transactionContainer}>
      <View style={styles.iconContainer}>
        <Image source={icon} />
      </View>
      <View style={styles.transactionNameandDate}>
        <Text style={styles.transactionTitle}>{title}</Text>
        <Text style={styles.transactionDate}>{date}</Text>
      </View>
      <Text style={styles.transactionAmount}>{amount}</Text>
    </TouchableOpacity>
  )
}
