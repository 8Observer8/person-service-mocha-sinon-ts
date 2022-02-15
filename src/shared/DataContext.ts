import IDataContext from "./IDataContext";
import IPerson from "./IPerson";

export default class DataContext implements IDataContext
{
    public savePerson(person: IPerson): void
    {
        console.log(`Person with name "${person.Name}" was saved.`);
    }
}
