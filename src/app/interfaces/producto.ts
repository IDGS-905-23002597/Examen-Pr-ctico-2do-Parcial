import { Categoria } from "./categoria";

export interface Producto {

  idProducto: number;

  nombre: string;

  descripcion: string;

  precio: number;

  imagen: string;

  idCategoria: number;

  categoria: Categoria;

}