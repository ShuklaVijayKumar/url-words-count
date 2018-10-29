export interface IDataService<T> {
    create(entity: T): Promise<T>;
    findOne(entityDetails: {}): Promise<T | null>;
    find(endityDetails: {}): Promise<T[]>;
    remove(entityDetails: {}): Promise<void>;
}
