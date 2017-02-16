/**
mangaparser.js -- parses information from chapter titles
*/
function parse(string) {
    return string.match(/(\d+(\.\d+)?)(?!.*\d)/g);
}
