import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Batik', description: 'In a smooth oxamite tale of a palette of diverse bars, the shards of this tea tell the story of several tea traditions: Kenya and Sri Lanka. Its great taste helps to find the most important learning points of black tea. Balance and richness, a low aroma that suggests citrus undertones, all in the background, makes black velvet one of the most striking representatives of its look.', price: 100, imageUrl: 'https://images.prom.ua/5057088044_chaj-batik-chernyj.jpg' },
    { id: 2, name: 'Pryaniki', description: 'Gingerbread cookies with lemon filling from the Kievkhlib brand are made from choux pastry and topped with glaze. The baked goods are incredibly soft, moderately sweet with a slight citrus sourness. The product has a classic round shape and small size. Gingerbread cookies with lemon filling are not only delicious, but also quite healthy. Lemon jam prevents colds and strengthens the immune system and blood vessels. The baked goods are made from the highest quality products.', price: 200, imageUrl: 'https://cdn.27.ua/799/5d/54/3628372_1.jpeg' },
    // Add more products here
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }

  constructor() { }
}
