import { UserModel } from "../../server/src/generated/prisma/models";

export type BASE_USER = UserModel;

export type BASE_RESPONSE = {
  success: boolean;
  message: string;
};

export interface USER_RESPONSE extends BASE_RESPONSE {
  users: Array<BASE_USER>;
}
