import { Schema, SchemaDefinition, SchemaOptions } from "mongoose";

export class BaseSchema extends Schema {
    constructor(definition?: SchemaDefinition, options?: SchemaOptions) {
        super(definition, options);
        this.set("toJSON", {
            virtuals: true,
        });
    }
}
