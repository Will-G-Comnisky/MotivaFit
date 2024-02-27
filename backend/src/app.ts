import express from 'express';
import cors from "cors";
import routes from "./routes/routes"
import 'dotenv/config';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

routes(app);
//app.use(routes)

export default app;