import { assertUserAuthenticated } from "@/utils/auth";
import * as Crypto from "expo-crypto";
import { collection, doc, DocumentData, DocumentSnapshot, getDocs, setDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import { useCallback, useState } from "react";

export enum TransactionType {
    EXPENSE = "expense",
    INCOME = "income",
}
export enum TransactionCategory {
    FOOD = "food",
    TRANSPORT = "transport",
    HOUSING = "housing",
    UTILITIES = "utilities",
    ENTERTAINMENT = "entertainment",
    OTHER = "other",
}
export interface Transaction {
    id: string;
    type: TransactionType;
    amount: number;
    date: Date;
    name: string;
    category:TransactionCategory;
    createdAt:Date;
    updateAt:Date;   
}

export async function createTransaction(transaction: Omit<Transaction, "id" | "createdAt" | "updateAt">) {
    const user = assertUserAuthenticated();

    const transactionRef=doc(firestore, "users", user.uid, "transactions", Crypto.randomUUID());

    await setDoc(transactionRef, {
        ...transaction,
        createdAt: new Date(),
        updateAt: new Date(),
    });

}
function toTransaction(doc: DocumentSnapshot<DocumentData>){
    return {
        id: doc.id,
        ...doc.data(),
        }as Transaction;
}

export async function getTransactions() {
    const user = assertUserAuthenticated();

    const transactionsRef = collection(firestore, "users", user.uid, "transactions");

    const transactions= await getDocs(transactionsRef);

    return transactions.docs.map(toTransaction);
} 

export function useTransactions(){
    const [transactions, setTransactions]=useState<Transaction[]>([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState<Error|null>(null);

    const loadTransaction=useCallback(async()=>{
        try{
            setLoading(true);
            const transaction=await getTransactions();
            setTransactions(transactions);
        }catch(error){
            setError(error as Error);
        }
        finally {
            setLoading(false);
        }
    },[]);
    return {transactions, loading, error, loadTransaction};
}