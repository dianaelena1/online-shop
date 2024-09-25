import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { Product } from '../../models/product.model';
import { SeoDirective } from '../../services/seo/seo.directive';

import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

SwiperCore.use([Navigation, Pagination]);

@Component({
  standalone: true,
  selector: 'plp-page',
  imports: [NgOptimizedImage, ProductCardComponent, SeoDirective],
  templateUrl: './plp.component.html',
  styleUrls: ['plp.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class PlpComponent {
  products: Product[] = [
    { id: '1', name: 'iPhone 11', price: 1000, src: 'products/iphone11.webp' },
    { id: '2', name: 'iPhone 12', price: 1200, src: 'products/iphone12.webp' },
    { id: '3', name: 'iPhone 13', price: 1300, src: 'products/iphone13.webp' },
    { id: '4', name: 'iPhone 14', price: 1800, src: 'products/iphone13.webp' },
    { id: '5', name: 'iPhone 15', price: 2100, src: 'products/iphone13.webp' },
  ];
}
