export type UserDocument = Users & Document;
export declare class Users {
    username: string;
    password: string;
}
export declare const UsersSchema: import("mongoose").Schema<Users, import("mongoose").Model<Users, any, any, any, import("mongoose").Document<unknown, any, Users> & Users & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Users, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Users>> & import("mongoose").FlatRecord<Users> & {
    _id: import("mongoose").Types.ObjectId;
}>;
