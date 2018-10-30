import { Filter } from "../filters/Filter";
import { Search } from "../models/Search";
import { SearchService } from "../services/data.service";
import { HttpService } from "../services/http.service";
import { Processor } from "../services/processor.service";
import { WordProcessor } from "../services/wordprocessor.service";
import { chai, chaiAsPromised, sinon, testData } from "./common";

const expect = chai.expect;

describe("Wordprocessor tests", () => {
    let processor: Processor;
    let wordProcessor: WordProcessor;
    let networkService: HttpService;
    before(() => {

        // map routes
        const htmlFilter = new Filter(/<[^>]*>/g, "");
        const specialtags = new Filter(/[&\/\\#,+()$~%.'":*?<>{}!-';_]/g, "");
        wordProcessor = new WordProcessor([htmlFilter, specialtags]);
        networkService = new HttpService();
        const dataService = new SearchService(Search);

        dataService.create = sinon.stub().callsFake((args) => Promise.resolve({...args}));

        // mock get
        networkService.Get = sinon.stub().resolves({ data: testData, success: true });
        processor = new Processor(networkService, () => wordProcessor, dataService);
    });

    it.only("should process correctly", async () => {

        const result = await processor.fetchData("url");
        expect(result.results.this).to.exist;
        expect(result.results.has).to.exist;
        expect(result.results.test.count).eqls(4);
        return Promise.resolve();
    });
});
