import { Model } from "mongoose";
import { IDataService } from "../interfaces/IDataservice";
import { ISearch } from "../models/schema/SearchSchema";

export class SearchService implements IDataService<ISearch> {

    constructor(private _model: Model<any>) {
    }
    public async create(entity: ISearch): Promise<ISearch> {
        return await this._model.create(entity);
    }
    public async findOne(entityDetails: {}): Promise<ISearch | null> {
        return await this._model.findOne(entityDetails);
    }
    public async  find(entityDetails: {}): Promise<ISearch[]> {
        return await this._model.find(entityDetails);
    }
    public async remove(entityDetails: {}): Promise<void> {
        return await this._model.remove(entityDetails);
    }
}
