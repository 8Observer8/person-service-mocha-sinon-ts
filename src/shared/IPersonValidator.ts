import IPerson from "./IPerson";

export default interface IPersonValidator
{
    isValid(person: IPerson): boolean;
}
