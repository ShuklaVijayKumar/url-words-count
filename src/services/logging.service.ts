import { ILogger } from "../interfaces/ILogger";
export class Logger implements ILogger {
    private readonly _loggerImplementation: any;
    constructor(loggerImplementation: ILogger | any) {
        this._loggerImplementation = loggerImplementation;
    }
    public log(...args: any[]): void {
        this._loggerImplementation.log(...args);
    }
    public info(...args: any[]): void {
        this._loggerImplementation.log(...args);
    }
    public debug(...args: any[]): void {
        this._loggerImplementation.log(...args);
    }
    public warn(...args: any[]): void {
        this._loggerImplementation.log(...args);
    }
    public error(...args: any[]): void {
        this._loggerImplementation.log(...args);
    }
}
