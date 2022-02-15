import * as express from "express";
import * as http from "http";
import * as path from "path";

import Person from "../shared/Person";
import Validator from "../shared/Validator";
import DataContext from "../shared/DataContext";
import PersonService from "../shared/PersonService";

const validator = new Validator();
const dataContext = new DataContext();
const personService = new PersonService(validator, dataContext);
const person = new Person(1, "Ivan");
personService.save(person);

const app = express();
app.use(express.static(path.join(__dirname, "../../public")));

const httpServer = http.createServer(app);
const port = process.env.PORT || 3000;
httpServer.listen(port, () => { console.log("Server started at port: " + port); });
