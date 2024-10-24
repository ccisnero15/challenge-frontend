import { Component, inject } from '@angular/core'
import { NgClass } from '@angular/common'
import { SidebarTogglerService } from '../../../services/sidebar-toggler.service'

@Component({
    selector: 'layout-topbar',
    standalone: true,
    imports: [NgClass],
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    host: {
        class: 'Topbar',
    },
})
export class TopbarComponent {
    togglerService = inject(SidebarTogglerService)
}
