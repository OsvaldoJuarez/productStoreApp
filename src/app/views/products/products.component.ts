import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productos = [
    { id: 1, nombre: 'Laptop Lenovo', precio: 1898 },
    { id: 2, nombre: 'Smartphone samsung', precio: 999 },
    { id: 3, nombre: 'Monitor LG 24', precio: 3999 },
    { id: 4, nombre: 'Teclado Mecanico Reddragon', precio: 1299 },
    { id: 5, nombre: 'Mouse inalambrico logitech', precio: 799 }
  ];
  
}
