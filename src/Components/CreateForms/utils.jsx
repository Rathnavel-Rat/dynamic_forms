

export function createFieldUUID() {

    const s = [];
    const hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; 
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  
    s[8] = s[13] = s[18] = s[23] = "-";

    return s.join("");
}
export function base64ToArrayBuffer(base64) { // use while rerender

    try{
        const binary_string = window.atob(base64);
        const len = binary_string.length;
        let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes
    }
    catch (e) {
        return null;
    }

}
export function bufferToBase64(buffer) {
    const binary = String.fromCharCode.apply(null, buffer);
    return window.btoa(binary);
}