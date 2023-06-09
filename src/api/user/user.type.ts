import { users } from '@prisma/client';

export type usersCreateData = users;

export type updateUser = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  rol_id: number;
}

