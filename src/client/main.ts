import Person from "../shared/Person";
import Validator from "../shared/Validator";
import DataContext from "../shared/DataContext";
import PersonService from "../shared/PersonService";

function main()
{
    const validator = new Validator();
    const dataContext = new DataContext();
    const personService = new PersonService(validator, dataContext);
    const person = new Person(1, "Ivan");
    personService.save(person);
}

main();
