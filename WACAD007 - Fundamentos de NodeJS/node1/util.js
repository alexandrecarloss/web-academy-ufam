function createLink(filename, url = filename) {
    return `<a href="${url}">${filename}</a><br>\n`;
}

module.exports = { 
    createLink:createLink 
};