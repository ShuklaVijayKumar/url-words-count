import { Document, Model, model } from "mongoose";
import { ISearchSchema } from "./schema/SearchSchema";

import { Collections } from "../helper/Collections";
import { BaseSchema } from "./schema/BaseSchema";

export class SearchModel {
    public model: Model<ISearchSchema>;
    private schema: BaseSchema;

    constructor() {
        this.schema = new BaseSchema({}, { strict: false, timestamps: true });
        this.model = model<ISearchSchema>(Collections.Search, this.schema);

    }
}

export const Search: Model<ISearchSchema> = new SearchModel().model;
