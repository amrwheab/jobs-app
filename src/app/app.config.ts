import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { jopsReducer } from './shared/store/jops/jops.reducer';
import { JopsEffects } from './shared/store/jops/jops.effect';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideStore({ jopsState: jopsReducer }),
    provideEffects([JopsEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: true })
  ]
};
