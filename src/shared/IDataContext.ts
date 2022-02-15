import IPerson from "./IPerson";

export default interface IDataContext
{
    savePerson(person: IPerson): void;
}
