import { createServer } from "node:http";

const requestListener = function (req, res) {
    if (req.url === "/redirect") {
        res.writeHead(302, { Location: "/redirected", "Set-Cookie": "cookie" });
        return res.end();
    }
    res.writeHead(200);
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

export const HOST = 'localhost';
export const PORT = 8000;
server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
