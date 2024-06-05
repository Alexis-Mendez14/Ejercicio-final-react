export {Productos} from "./Producto.js"

export const App =() =>{

  <Productable Producto ={Productos}/>
  
}
export function Productable ({Productos}){
}
export function Productfile ({}){
  const ListaProductos = Productable.map(Producto.filter(Producto =>Productos.nombre))
}
export function Categoryfile ({}){
  <h1>Cafetería</h1>

}