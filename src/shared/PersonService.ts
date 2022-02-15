import IPerson from "./IPerson";
import IDataContext from "./IDataContext";
import IPersonValidator from "./IPersonValidator";

export default class PersonService
{
    private _validator: IPersonValidator;
    private _dataContext: IDataContext;

    constructor(validator: IPersonValidator, dataContext: IDataContext)
    {
        this._validator = validator;
        this._dataContext = dataContext;
    }

    public save(person: IPerson)
    {
        if (this._validator.isValid(person))
        {
            this._dataContext.savePerson(person);
        } else
        {
            throw new Error("Person is not valid.");
        }
    }
}
