import mockery from "mockery";
import * as TestSuite from "./common";

const testData = "This is a test line 1 \r\n This is test line 2\r\nThis is test line 3";
const expect = TestSuite.chai.expect;

const axiosMock: any = {};

axiosMock.get = TestSuite.sinon.stub().resolves({ data: TestSuite.testData });
mockery.registerMock("axios", axiosMock);
mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false,
});
// importing after adding mock..else will not override axios package
import { HttpService } from "../services/http.service";

TestSuite.describe("it should send network request", () => {
    const networkService: HttpService = new HttpService();
    after(() => mockery.disable());

    it("should return valid data", async () => {

        const result = await networkService.Get("url");
        return expect(result.data).equals(TestSuite.testData);
    });
});
