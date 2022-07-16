import UserModel from "../../domain/entities/user";
import user from "../../domain/entities/user";
import IUserRepository from "../../domain/usecases/repository/user-repository";
import dataUser from "./jsons/user.json";

export default class UserLocalRepository implements IUserRepository {
  async login(email: string, password: string): Promise<UserModel> {
    const user = await dataUser.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      return new UserModel(
        user.id,
        user.first_name,
        user.last_name,
        user.email,
        user.password
      );
    }

    throw ("User Not Found");
  }
}
