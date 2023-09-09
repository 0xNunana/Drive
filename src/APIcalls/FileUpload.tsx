import { storage } from "@/lib/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addFiles } from "./Firestore";

export const FileUpload = async (file: any,setProgress:Function) => {
  try {
    const storageRef = ref(storage, `file/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      console.log(`Upload Progress: ${progress}%`);
      setProgress(progress)
    });

    await uploadTask;

    const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
    console.log("Download URL:", downloadUrl);
    addFiles(downloadUrl)
    
    // You can return the download URL or perform further actions here
    return downloadUrl;
  } catch (error) {
    console.error("Upload Error:", error);
    // Handle the error gracefully (e.g., display an error message to the user)
    throw error;
  }
};
