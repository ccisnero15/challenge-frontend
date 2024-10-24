import { Component, inject, ViewChild } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NgClass } from '@angular/common'
import { Sidebar, SidebarModule } from 'primeng/sidebar'
import { ButtonModule } from 'primeng/button'
import { RippleModule } from 'primeng/ripple'
import { AvatarModule } from 'primeng/avatar'
import { StyleClassModule } from 'primeng/styleclass'
import { SidebarComponent } from '../shared/components/layouts/sidebar/sidebar.component'
import { SidebarTogglerService } from '../shared/services/sidebar-toggler.service'
import { AuthStateService } from '../shared/state/auth-state.service'
import { TopbarComponent } from '../shared/components/layouts/topbar/topbar.component'
@Component({
    standalone: true,
    imports: [RouterOutlet, NgClass, SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, SidebarComponent, TopbarComponent],
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss',
})
export class FeaturesComponent {
    protected togglerService = inject(SidebarTogglerService)
    protected authStateService = inject(AuthStateService)
}
