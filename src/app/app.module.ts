import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstFooter } from '../app/layout/footer/est-footer.component';
import { EstHeader } from '../app/layout/header/est-header.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserComponent } from '../app/components/user/user.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    UserComponent,
    BrowserModule,
    AppRoutingModule,
    EstFooter,
    EstHeader,
  ],
  providers: [
    provideHttpClient(withFetch()),
    // provideClientHydration(withEventReplay())
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
