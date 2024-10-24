import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
})
export class AuthComponent {}
