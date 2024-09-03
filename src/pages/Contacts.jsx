import { useParams } from "react-router-dom"

export const Contacts =() =>{
const {contactId} = useParams()
return <h1>{contactId}</h1>
}