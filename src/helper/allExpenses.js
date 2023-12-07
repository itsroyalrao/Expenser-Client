import axios from "axios";

async function allExpenses(email, setAmount, setShowExpenses) {
  try {
    const response = await axios.get(
      // `http://localhost:3000/home/allExpenses?email=${email}`
      `https://expenser-backend-production.up.railway.app/home/allExpenses?email=${email}`
    );

    setAmount(response.data.expense[0].totalAmount);
    setShowExpenses(response.data.expense);
  } catch (e) {
    console.log(e);
  }
}

export default allExpenses;