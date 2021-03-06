const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter a message</title></head>')
        res.write('<body><form action="/message" method="POST" input="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', chunk => body.push(chunk))
    }

    return req.on('end', () => {
        const parserBody = Buffer.concat(body).toString()
        const message = parserBody.split('=')[1]
        fs.writeFile('./messages.txt', message, err => {
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
        })
    })

    // res.setHeader('content-type', 'text/html')
    // res.write('<html>)
    // res.write('<head><title>WEB601</title></head>')
    // res.write('<body><h1>WEB601</h1>')
    // res.write('</html>')
    //     res.end()
}

exports.handler = requestHandler
