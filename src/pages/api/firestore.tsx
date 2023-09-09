import { storage,db,app } from "@/lib/firebaseConfig";
import { NextApiRequest,NextApiResponse } from "next";


 const fireApi = (req:NextApiRequest,res:NextApiResponse)=>{
res.status(200).json({text:'server working'})

}

export default fireApi;