import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { WordCounter } from "./controllers/WordCounter";
import { Filter } from "./filters/Filter";
import { ILogger } from "./interfaces/ILogger";
import { Search } from "./models/Search";
import { SearchService } from "./services/data.service";
import { HttpService } from "./services/http.service";
import { Logger } from "./services/logging.service";
import { Processor } from "./services/processor.service";
import { WordProcessor } from "./services/wordprocessor.service";

class Server {
    // starting Port
    private readonly _port = process.env.PORT || 8080;
    private readonly _connectionString = process.env.MONGOURL || "mongodb://localhost:27017";

    constructor(private _app: express.Application,
                private _middlewares: Array<(e: express.Application) => void>,
                private _logger: ILogger) {
        // adding middlewares
        _middlewares.forEach((middleware) => middleware(_app));
    }

    public async start(): Promise<void> {

        this._logger.log("starting application..");

        // connect to db
        await mongoose.connect(this._connectionString, {useNewUrlParser: true});

        // map routes
        const htmlFilter = new Filter(/<[^>]*>/g, "");
        const specialtags = new Filter(/[&\/\\#,+()$~%.'":*?<>{}!-';_]/g, "");

        const processor = new Processor(new HttpService(),
            new WordProcessor([htmlFilter, specialtags]),
            new SearchService(Search));

        const controller = new WordCounter(this._logger, processor);
        this._app.post("/wordcount", controller.count.bind(controller));
        this._app.listen(this._port, (error: any) => {
            if (error) {
                this._logger.error(error);
                process.exit(1);
            }

            this._logger.info(`application listening on port ${this._port}`);
        });
    }
}

new Server(express(), [(app: express.Application) => {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

}], new Logger(console)).start();
