import { FilterQuery, Model, Types, UpdateQuery } from "mongoose";
import { AbstractDocument } from "./abstract.schema";
import { Logger, NotFoundException } from "@nestjs/common";

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
    protected abstract readonly logger: Logger

    constructor(protected readonly model: Model<TDocument>) { }

    // CRUD for once and all 
    // SO GREAT IDEA -- ITS SO GENERIC

    // execluding _id from TDocument --> OMIT
    async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
        const createdDocument = new this.model({
            ...document,
            _id: new Types.ObjectId()
        })

        return (await createdDocument.save()).toJSON() as unknown as TDocument

    }

    async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
        // that lean is for i dont want anything additional form MongoDB 
        //i just want what iam seraching for --> lean(true)

        const thatDocument = await this.model.findOne(filterQuery).lean<TDocument>(true)

        if (!thatDocument) {
            this.logger.warn('Document was not fond with this query')
            throw new NotFoundException('Document not found')
        }
        return thatDocument as unknown as TDocument;
    }

    async findOneAndUpdate(
        filterQuery: FilterQuery<TDocument>,
        update: UpdateQuery<TDocument>):
        Promise<TDocument> {

        // give us the doc after it has been updated and unhydrated
        const updatedDocument = await this.model.findOneAndUpdate(filterQuery, update, {
            new: true
        }).lean<TDocument>(true)

        if (!updatedDocument) {
            this.logger.warn('Document was not fond with this query')
            throw new NotFoundException('Document not found')
        }

        return updatedDocument as unknown as TDocument;

    }

    // find multiple records
    async find(filterQuery: FilterQuery<TDocument>): Promise<TDocument[]> {
        return await this.model.find(filterQuery).lean<TDocument[]>(true)
    }

    async findOneAndDelete(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
        return await this.model.findOneAndDelete(filterQuery).lean<TDocument>()
    }
}