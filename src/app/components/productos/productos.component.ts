import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  buscar: string = '';
  categoriaSeleccionada: string = 'Todas';

  private servicio = inject(ProductoService);

  ngOnInit(): void {

    this.servicio.obtenerProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = data;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  filtrarProductos() {

    this.productosFiltrados = this.productos.filter(producto => {

      const coincideNombre =
        producto.nombre.toLowerCase().includes(this.buscar.toLowerCase());

      const coincideCategoria =
        this.categoriaSeleccionada === 'Todas' ||
        producto.categoria.nombre === this.categoriaSeleccionada;

      return coincideNombre && coincideCategoria;

    });

  }

}