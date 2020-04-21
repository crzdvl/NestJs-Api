import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly blogpost: string;
  readonly title: string;
  readonly author: string;
  readonly published: Array <{
    publisher: string,
    year: number
    }>;
}
