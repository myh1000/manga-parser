/**
mangaparser.js -- parses information from chapter titles
*/
function parse(string) {
    var result

    if (result = string.match(/(\W+?)(chapter|chap|ch)\.*(\s*[\d\.]*)/i)) {
        if (parseFloat(result[3])) {
            if (result[3].match(/\.+(\d+)/g))
                return parseFloat(result[3].replace(result[3].match(/\.+(\d+)/g), "." + (parseFloat(result[3].match(/\.+(\d+)/)[1]))));
            else
                return parseFloat(result[3]);
        }
    }

    if (result = string.match(/(\d+(\.\d+)?)/g))
        if (result[0].match(/\.+(\d+)/g))
            return parseFloat(result[0].replace(result[0].match(/\.+(\d+)/g), "." + (parseFloat(result[0].match(/\.+(\d+)/)[1]))));
        else
            return parseFloat(result[0]);
            
    // if all else fails
    return 1;
}
