import OverviewGraph from "../components/OverviewGraph/OverviewGraph";
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../scripts/firebase/config';
import categoryToColor from "../tools/categoryToColor";
//import styles from '../styles/auth.module.css';
import styles from '../styles/Dashboard.module.css';




export default function Dashboard() {
  return (
    <>
    <div className={styles.background}>
                <div className={styles.topbar}>
                        <div className={styles.topbarBrand}>
                            <div className={styles.topbarLogo}>
                                <span className={styles.circle}></span>
                                <span className={styles.circle}></span>
                            </div>
                            <h1 style={{color: "white"}}>ExTracker</h1>
                        </div>
                </div>
      <div className={styles.background}><OverviewGraph /></div>
      <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", backgroundColor: "black"}}><TestingPieGraph /></div>
    </div>
    </>
  );
}

const TestingPieGraph = () => {
  interface ExpenseData {
    name?: string;
    amount?: number;
    date?: string;
    category?: CategoryDetails;
  }

  interface CategoryDetails {
    name?: string;
    color?: string;
  }

  const [expenseData, setExpenseData] = useState<ExpenseData>({category: {name: 'Food', color: categoryToColor('Food')}});

  const setName = (e) => {
    setExpenseData(curr => ({
      ...curr,
      name: e.target.value
    }))
  }

  const setAmount = (e) => {
    setExpenseData(curr => ({
      ...curr,
      amount: Number(e.target.value)
    }))
  }

  const setDate = (e) => {
    setExpenseData(curr => ({
      ...curr,
      date: e.target.value
    }))
  }

  const setCategory = (e) => {
    const categoryColor = categoryToColor(e.target.value);
    setExpenseData(curr => ({
      ...curr,
      category: {name: e.target.value, color: categoryColor}
    }))
  }

  const addExpense = () => {
    console.log(expenseData);
    addDoc(collection(db, "expenses"), expenseData);
  }
  return(
    <>
    <div className={styles.background}>
    <div className={styles.expenseinput}>
      <h3 style={{paddingRight: "20px"}}>Expense Name: </h3>
      <input onChange={setName}></input>
    </div>
    <div className={styles.expenseinput}>
      <h3 style={{paddingRight: "20px"}}>Amount ($):</h3>
      <input onChange={setAmount} type="number" min="0.01" step="0.01"></input>
    </div>
    <div className={styles.expenseinput}>
      <h3 style={{paddingRight: "20px"}}>Date:</h3>
      <input onChange={setDate} type="date"></input>
      
      <h3 style={{paddingLeft:"100px", paddingRight: "20px"}}>Category:</h3>
      <select onChange={setCategory}>
        <option>Food</option>
        <option>Travel</option>
        <option>Entertainment</option>
        <option>Shopping</option>
        <option>Health</option>
        <option>Bills</option>
        <option>Other</option>

      </select>
      <br />
      </div>
      <br />
      <button className={styles.expensebtn} onClick={addExpense}>Add Expense</button>
      <br />
      <pre>{JSON.stringify(expenseData, null, 2)}</pre>
      </div>
    </>
  );
}