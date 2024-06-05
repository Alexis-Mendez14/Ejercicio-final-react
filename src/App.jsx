export {Productos} from "./Producto.js"

export const App =() =>{

  <Productable Producto ={Productos}/>
  
}
export function Productable ({Productos}){
  const Lista =Productable.map(Productable => <li>{Productos}</li>)
  
}
export function Categoryfile ({}){

}
export function Productfile ({}){

}