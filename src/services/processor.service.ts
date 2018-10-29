import { SearchService } from "./data.service";
import { HttpService } from "./http.service";
import { WordProcessor } from "./wordprocessor.service";

export class Processor {
    private _processes = [];
    constructor(private _networkService: HttpService,
                private _wordProcessor: WordProcessor,
                private _searchDataService: SearchService) {
    }

    public async fetchData(url: string): Promise<any> {

        try {
            const result = await this._networkService.Get(url);
            if (result.success) {
                const lines: string[] = result.data.split(/[\r\n]+/);
                lines.forEach((element) => this._wordProcessor.processLine(element.toLowerCase()));
                const results =  this._wordProcessor.getResult();
                return await this._searchDataService.create({ url, results });
            }
        } catch (error) {
            throw error;
        }

    }

}
