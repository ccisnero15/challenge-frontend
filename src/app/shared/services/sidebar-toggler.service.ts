import { computed, Injectable, signal } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class SidebarTogglerService {
    private _isOpen = signal<boolean>(true)
    isOpen = computed(() => this._isOpen())

    toggle() {
        this._isOpen.update((isOpen) => !isOpen)
    }
}
