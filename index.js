import { createServer } from "node:http";

export const HOST = 'localhost';
export const PORT = 8000;

const requestListener = function (req, res) {
    if (req.url === "/redirect") {
        res.setHeader("Set-Cookie", "cookie");
        res.setHeader("location", `http://${HOST}:${PORT}/redirected`);
        res.setHeader("x-custom-header", "coucou");
        res.writeHead(302);
        return res.end();
    }
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<!DOCTYPE html>");
    res.write("<html><body><p data-testid='hello'>")
    res.write(
        req.headers.cookie === undefined 
            ? "Hello, new visitor."
            : "Welcome back, redirected visitor."
    );
    res.write("</p></body></html>");
    return res.end();
};

const server = createServer(requestListener);

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
