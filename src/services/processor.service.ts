import { SearchService } from "./data.service";
import { HttpService } from "./http.service";
import { WordProcessor } from "./wordprocessor.service";

export class Processor {

    constructor(private _networkService: HttpService,
                private _wordProcessor: () => WordProcessor,
                private _searchDataService: SearchService) {
    }

    public async fetchData(url: string): Promise<any> {

        try {
            const result = await this._networkService.Get(url);
            // get instance of word processor per request
            const wordprocessor = this._wordProcessor();
            if (result.success) {
                // breakdown text to array of lines
                const lines: string[] = result.data.split(/[\r\n]+/);
                // process each line
                lines.forEach((element) => wordprocessor.processLine(element.toLowerCase()));
                // get result
                const results =  wordprocessor.getResult();
                // return result
                return await this._searchDataService.create({ url, results });
            }
        } catch (error) {
            throw error;
        }

    }

}
