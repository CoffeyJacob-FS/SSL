const axios = require("axios");

require("dotenv").config();

const getReg = async (data)=>{
    return await axios.post(process.env.db_url , data);
}
module.exports=getReg;