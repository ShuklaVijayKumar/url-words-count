import { IFilter } from "../interfaces/Ifilter";

export class Filter implements IFilter<string> {

    constructor(private _expression: RegExp, private _replacer: string) {
    }

   public Filter(filter: string): string {
        return filter.replace(this._expression, this._replacer);
    }

}
