import Person from "../../src/shared/Person";
import Validator from "../../src/shared/Validator";
import DataContext from "../../src/shared/DataContext";
import PersonService from "../../src/shared/PersonService";
import * as sinon from "sinon";
import * as assert from "assert";

describe("Person Service Specs", () =>
{
    it("The 'save' method is called if a person is valid", () =>
    {
        const person = new Person(1, "Ivan");

        const validator = new Validator();
        const func = sinon.stub();
        func.withArgs(person).returns(true);
        validator.isValid = func;

        const spy = sinon.spy();
        const dataContext = new DataContext();
        dataContext.savePerson = spy;
        const personService = new PersonService(validator, dataContext);

        personService.save(person);
        assert(spy.calledOnce);
    });
});
