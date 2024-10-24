import { Component, inject } from '@angular/core'
import { SIDEBAR_MENU_CONFIG } from './sidebar-menu.config'
import { SidebarTogglerService } from '../../../services/sidebar-toggler.service'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { NgClass } from '@angular/common'
import { AuthStateService } from '../../../state/auth-state.service'
import { ButtonModule } from 'primeng/button'

@Component({
    selector: 'layout-sidebar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgClass, ButtonModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    host: { class: 'Sidebar' },
})
export class SidebarComponent {
    protected menu = SIDEBAR_MENU_CONFIG
    togglerService = inject(SidebarTogglerService)
    authStateService = inject(AuthStateService)

    toggleSidebar(event: Event) {
        event.stopPropagation()
        this.togglerService.toggle()
    }

    logout() {
        this.authStateService.logout()
    }
}
