import express from 'express';
import cors from "cors";
import routes from "./routes"
import 'dotenv/config';
import bodyParser from 'body-parser';


const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

app.use(routes)

export default app;