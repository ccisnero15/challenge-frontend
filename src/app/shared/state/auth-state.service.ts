import { computed, effect, inject, Injectable, signal } from '@angular/core'
import { Router } from '@angular/router'
import { delay, Observable, of } from 'rxjs'

import { LocalStorageService } from '../../core/services/local-storage.service'
import { AuthModel } from '../models/interfaces/auth.interface'
import { adminCredentials, userCredentials } from '../../auth/utils/credentials.util'

const INITIAL_STATE: AuthModel = {
    email: '',
    expirationDate: new Date(),
    hasReadOnlyPermission: false,
    hasWritePermission: false,
    refreshToken: '',
    roleId: 0,
    roleName: '',
    token: '',
    userId: 0,
    userName: '',
}

@Injectable({
    providedIn: 'root',
})
export class AuthStateService {
    private router = inject(Router)
    private localStorageService = inject(LocalStorageService)

    // State
    private state = signal<AuthModel>(this.localStorageService.getStorage('auth') ?? INITIAL_STATE)

    // Selectors
    isAuthenticated = computed(() => !!this.state().token)
    hasReadOnlyPermission = computed(() => this.state().hasReadOnlyPermission)
    hasWritePermission = computed(() => this.state().hasWritePermission)
    userName = computed(() => this.state().userName)

    // Effects
    effecAuthtState = effect(() => this.localStorageService.setStorage('auth', this.state()))

    // Actions/Reducers
    setAuth(payload: AuthModel) {
        this.state.set(payload)
    }

    login(email: string, password: string): Observable<boolean> {
        const auth = this.handleCredentials(email, password)
        if (auth) {
            this.setAuth(auth)
            return of(true).pipe(delay(3000))
        }

        return of(false).pipe(delay(3000))
    }

    handleCredentials(email: string, password: string): AuthModel | null {
        let auth: AuthModel
        if (email === adminCredentials.email && password === adminCredentials.password) {
            //Para admin
            auth = {
                email: 'admin@admin.com',
                expirationDate: new Date(),
                hasReadOnlyPermission: false,
                hasWritePermission: true,
                refreshToken: '',
                roleId: 1,
                roleName: 'Admin',
                token: 'token',
                userId: 1,
                userName: 'Admin',
            }
            return auth
        }

        if (email === userCredentials.email && password === userCredentials.password) {
            //Para user
            auth = {
                email: 'user@user.com',
                expirationDate: new Date(),
                hasReadOnlyPermission: true,
                hasWritePermission: false,
                refreshToken: '',
                roleId: 2,
                roleName: 'User',
                token: 'token',
                userId: 2,
                userName: 'User',
            }
            return auth
        }

        return null
    }

    logout() {
        this.state.set(INITIAL_STATE)
        this.localStorageService.clearStorage()
        this.router.navigate(['auth/login'])
    }
}
