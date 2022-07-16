import UserModel from "../../entities/user";

export default interface IUserRepository {
    login(email: string, password: string): Promise<UserModel>;
}