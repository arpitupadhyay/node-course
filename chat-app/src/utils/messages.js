const generateMessage = (text) => {
    return {
        text,
        createdAt : new Date().getTime()
    }
}

const generateLocalMessage = (url) => {
    return {
        url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocalMessage
}