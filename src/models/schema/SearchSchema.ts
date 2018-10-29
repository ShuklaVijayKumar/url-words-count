import { Document } from "mongoose";
export interface ISearch {
    id?: string;
    url: string;
    results: object;
    createdAt?: Date;
    updatedAt?: Date;
}

export type ISearchSchema = ISearch & Document;
