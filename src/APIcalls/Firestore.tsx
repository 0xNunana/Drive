import { db } from "@/lib/firebaseConfig";
import { collection,addDoc } from "firebase/firestore";

let files = collection(db,'uploaded files')

export const addFiles =(imageUrl:string)=>{
    try {
        addDoc(files,{
            imageLink:imageUrl
        })
    } catch (error) {
        console.log(error)
    }
}