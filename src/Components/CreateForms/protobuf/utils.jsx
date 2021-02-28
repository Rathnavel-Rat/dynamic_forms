

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

export function createForm_UUID(){
    let dt = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}