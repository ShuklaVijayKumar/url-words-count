import { AxiosResponse } from "../../node_modules/axios";

type Result = {
    success: boolean,
    error: any
};

//composite type
export type NetworkResult = AxiosResponse & Result;