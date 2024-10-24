import { inject } from '@angular/core'

import { CanActivateFn, Router } from '@angular/router'
import { AuthStateService } from '../../shared/state/auth-state.service'

export const hasRolesGuard: CanActivateFn = () => {
    const authStateService = inject(AuthStateService)
    const router = inject(Router)

    if (authStateService.roleName() === 'Admin') return true
    router.navigate(['posts'])
    return false
}
