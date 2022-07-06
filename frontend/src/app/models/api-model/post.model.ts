export interface PostModel {
    _id: string;
    title: string;
    createdBy: string;
    entries: any[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}