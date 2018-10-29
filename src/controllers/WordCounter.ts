import { Request } from "express";
import { Response } from "express";
import { ILogger } from "../interfaces/ILogger";
import { Processor } from "../services/processor.service";

export class WordCounter {

    constructor(private _logger: ILogger, private _processor: Processor) {
    }

    public async count(request: Request, response: Response) {

        const url = request.body.url;
        if (!url) {
            return response.status(400).send("missing required parameter : url");
        }
        try {
            const result = await this._processor.fetchData(url);
            return response.status(200).send(result);
        } catch (error) {
            this._logger.error(error);
            return response.status(500).send("Internal Server error");
        }
    }
}
