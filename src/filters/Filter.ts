import { IFilter } from "../interfaces/Ifilter";

export class Filter implements IFilter<string> {

    constructor(private _expression: RegExp | ((arg: string) => string), private _replacer?: string) {
    }

    public Filter(filter: string): string {
        let result: string = "";
        if (this._expression instanceof RegExp && this._replacer) {
            result = filter.replace(this._expression, this._replacer);
        }
        if (typeof this._expression === "function") {
            result = this._expression(filter);
        }
        return result;

    }

}
