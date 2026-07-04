import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);

  private api = 'https://localhost:7214/api/Productos';

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.api);
  }

}