import axios from "axios";

const QuotesApi = async ()=>{
    const res = await axios.get("https://dummyjson.com/quotes/random")
    return res.data
}


export default QuotesApi