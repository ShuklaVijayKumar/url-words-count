import { IFilter } from "../interfaces/Ifilter";

export class WordProcessor {
    private __searchResult: any = {};
    constructor(private _filters: Array<IFilter<string>>) {

    }
    public processLine(line: string) {

        // apply filter
        const filters = this._filters || [];
        const reduced = filters.reduce((prev, filter) => filter.Filter(prev), line);

        const words = reduced.split(/\s+/g)
            .filter((word) => word.trim());
        words.forEach((word) => {
            if (this.__searchResult.hasOwnProperty(word)) {
                // already has word so will increase the count
                this.__searchResult[word].count++;
                return;
            }
            this.__searchResult[word] = { count: 1 };
        });
    }

    public getResult(): any {
        return this.__searchResult;
    }
}
