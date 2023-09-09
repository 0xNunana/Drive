import React,{ChangeEvent, useState} from 'react'
import Button from './Button'
import { FileUpload } from '@/APIcalls/FileUpload'
import Progress from './Progress'

const UploadFiles = () => {
const [isFileVisible,setIsFileVisible]=useState(false)
const [progress,setProgress]=useState(0)

const Upload=async(event:ChangeEvent<HTMLInputElement>)=>{
   let files = event?.target.files?.[0]
   console.log('done',files)
FileUpload(files,setProgress)
}

  return (
    <div>
      <Progress progress={progress}/>
        
        <div className='m-3 flex space-x-4'>
<Button title='ADD A FILE' style='bg-blue-200 text-2xl font-semibold' clicked={()=>setIsFileVisible(!isFileVisible)}/>
{isFileVisible && (<div className='flex items-center w-1/3'><input type='file'   
 onChange={(event)=>Upload(event)}
/>
</div>)}

<Button title='CREATE A FOLDER' style='bg-blue-200 text-2xl font-semibold '/>
        
    </div>
    </div>
 
  )
}

export default UploadFiles