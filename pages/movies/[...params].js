import { useRouter } from "next/router";

export default function Detail({params}){
 const router =  useRouter();
const [titile, id] = params || [];
 
 return (
    <div>
        <h4>{titile || "Loading..."}</h4>
    </div>
 )
}


export function getServerSideProps({params:{params}}){
    return {
        props:{
            params,
        },
    }
}