import { inject } from '@angular/core'

import { CanActivateFn, Router } from '@angular/router'
import { AuthStateService } from '../../shared/state/auth-state.service'

export const isAuthenticatedGuard: CanActivateFn = () => {
    const authStateService = inject(AuthStateService)
    const router = inject(Router)
    if (authStateService.isAuthenticated()) return true
    router.navigate(['auth/login'])
    return false
}
