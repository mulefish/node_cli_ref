 
const reset = "\x1b[0m";
const fgBlack = "\x1b[30m";
const fgWhite = "\x1b[37m";
//
const bgRed = "\x1b[41m";
const bgGreen = "\x1b[42m";
const bgYellow = "\x1b[43m";
const bgCyan = "\x1b[46m";
 
function yellow( msg ) {
    const type = typeof msg
    if ( type === "object") {
        const x = bgYellow + fgBlack + JSON.stringify(msg,null,2) + reset;
        console.log( x )
    } else {
        const x = bgYellow + fgBlack + msg + reset;
        console.log( x )
    }
}
 
function green( msg ) {
    const type = typeof msg
    if ( type === "object") {
        const x = bgGreen + fgBlack + JSON.stringify(msg,null,2) + reset;
        console.log( x )
    } else {
        const x = bgGreen + fgBlack + msg + reset;
        console.log( x )
    }
}
 
function red( msg ) {
    const type = typeof msg
    if ( type === "object") {
        const x = bgRed + fgWhite + JSON.stringify(msg,null,2) + reset;
        console.log( x )
    } else {
        const x = bgRed + fgWhite + msg + reset;
        console.log( x )
    }
}
 
function cyan( msg ) {
    const type = typeof msg
    if ( type === "object") {
        const x = bgCyan + fgBlack + JSON.stringify(msg,null,2) + reset;
        console.log( x )
    } else {
        const x = bgCyan + fgBlack + msg + reset;
        console.log( x )
    }
}
 
function log( msg ) {
    console.log(msg)
}
 
const isSame = (a,b) => {
    const aa = JSON.stringify(a)
    const bb = JSON.stringify(b)
    if (aa === bb) {
        return true
    } else {
        return false
    }   
}
const verdict = (a, b, msg) => {
    const aa = JSON.stringify(a)
    const bb = JSON.stringify(b)
    if (aa === bb) {
        yellow("PASS " + msg)
        return true
    } else {
        red("FAIL " + msg)
        return false
    }
}
 
module.exports = { log, yellow, green, cyan, isSame, verdict, red }
 


/*
Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Underscore = "\x1b[4m";
const Blink = "\x1b[5m";
const Reverse = "\x1b[7m";
const Hidden = "\x1b[8m";
const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const FgBlue = "\x1b[34m";
const FgMagenta = "\x1b[35m";
const FgCyan = "\x1b[36m";
const fgWhite = "\x1b[37m";
const BgBlack = "\x1b[40m";
const BgBlue = "\x1b[44m";
const BgMagenta = "\x1b[45m";
const BgWhite = "\x1b[47m";
*/
