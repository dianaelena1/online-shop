import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { register as registerSwiperElements } from 'swiper/element/bundle';

import { AppModule } from './app/app.module';

registerSwiperElements();

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
