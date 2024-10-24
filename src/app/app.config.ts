import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { provideSpinnerConfig } from 'ngx-spinner'

import { spinnerInterceptor } from './core/interceptors/spinner.interceptor'
import routesConfig from './app.routes'

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideSpinnerConfig({ type: 'ball-clip-rotate' }),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routesConfig),
        provideHttpClient(withInterceptors([spinnerInterceptor])),
    ],
}
