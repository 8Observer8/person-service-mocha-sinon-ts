import IPersonValidator from "./IPersonValidator";
import IPerson from "./IPerson";

export default class Validator implements IPersonValidator
{
    isValid(person: IPerson): boolean
    {
        return person.Name !== "Fool";
    }
}
