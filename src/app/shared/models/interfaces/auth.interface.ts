export interface AuthModel {
    email: string
    expirationDate: Date
    refreshToken: string
    roleId: number
    roleName: string
    token: string
    userId: number
    userName: string
    hasWritePermission: boolean
    hasReadOnlyPermission: boolean
}
