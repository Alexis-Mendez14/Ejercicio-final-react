import { useRouteError } from "react-router-dom";
export default function ErrorPage(){
    const error = useRouteError()
    console.error(error)
}
return(
    <div id='id-error'>
        <h1>
            Error
        </h1>
    </div>
    
)