import { Document } from 'mongoose';

export interface IBook extends Document {
  readonly blogpost: string;
  readonly firstName: string;
  readonly lastName: number;
  readonly email: string;
  readonly phone: number;
  readonly isAdmin: boolean;
  readonly verified: boolean;
}
