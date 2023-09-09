type GoogleAuth ={
    clientId:string;
clientSecret:string
}

type GihubAuth = {
    clientId:string;
    clientSecret:string
    
}

type ButtonType ={
    title:string;
    clicked?:()=>void;
    style:string

}
interface ProgressProps {
    progress: number;
  }