import { AES, enc } from 'crypto-js'

export const encrypt = (value: any) => {
    let encJson = AES.encrypt(JSON.stringify(value), 'key').toString()
    let encData = enc.Base64.stringify(enc.Utf8.parse(encJson))
    return encData
}

export const decrypt = (value: any) => {
    let decData = enc.Base64.parse(value).toString(enc.Utf8)
    let bytes = AES.decrypt(decData, 'key').toString(enc.Utf8)
    return JSON.parse(bytes)
}
