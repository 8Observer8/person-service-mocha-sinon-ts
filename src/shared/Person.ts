import IPerson from "./IPerson";

export default class Person implements IPerson
{
    private _name: string;
    private _id: number;

    public constructor(id: number, name: string)
    {
        this._id = id;
        this._name = name;
    }

    public get Name(): string
    {
        return this._name;
    }
    public set Name(v: string)
    {
        this._name = v;
    }

    public get Id(): number
    {
        return this._id;
    }
    public set Id(v: number)
    {
        this._id = v;
    }
}
