import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DestroyRef, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

export abstract class BaseApi<T> {
    protected httpClient = inject(HttpClient)
    protected destroyRef = inject(DestroyRef)
    private apiUrl = 'https://jsonplaceholder.typicode.com/'
    private headers = new HttpHeaders({ 'Content-type': 'application/json' })
    protected pathName: string = ''

    getPaginatedList() {
        const url = `${this.apiUrl}${this.pathName}`
        return this.httpClient.get<any>(url, { headers: this.headers }).pipe(takeUntilDestroyed(this.destroyRef))
    }

    update<ReqType = T, ResType = T>(data: ReqType, id: number) {
        const url = `${this.apiUrl}${this.pathName}/${id}`
        const body = JSON.stringify(data)
        return this.httpClient.put<any>(url, body, { headers: this.headers })
    }

    create<ReqType = T, ResType = T>(data: ReqType) {
        const url = `${this.apiUrl}${this.pathName}`
        const body = JSON.stringify(data)
        return this.httpClient.post<any>(url, body, { headers: this.headers })
    }

    delete(id: number) {
        const url = `${this.apiUrl}${this.pathName}/${id}`
        return this.httpClient.delete(url, { headers: this.headers })
    }
}
