import dotenv  from "dotenv"
dotenv.config();

const config = {
    db: {
      url: process.env.DB_HOST,
      name: process.env.DB_NAME
    }
  }
  
export default config 