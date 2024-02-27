import spdy from "spdy" // HTTP 2 (retrocompativel com HTTPS)
import fs from 'fs';
import app from '../app';



const server = spdy.createServer({
    key: fs.readFileSync("key.pem", "utf-8"),
    cert: fs.readFileSync("cert.pem", "utf-8")
}, app);


const PORT = process.env.PORT || 3001;

server.listen(PORT, ()=> console.log(`Server Rodando em https://localhost:${PORT}`));


