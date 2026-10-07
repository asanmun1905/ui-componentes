import { Component, input, output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product = input<Product | undefined>();

  added = output<(nombre: string, apellidos: string, edad: number)>();

  addToCart(event:string) {
    let obj: { nombre: string; apellidos: string; edad: number } = {
      nombre: 'John',
      apellidos: 'Doe',
      edad: 30
    };
    this.added.emit(obj);
  }
}
