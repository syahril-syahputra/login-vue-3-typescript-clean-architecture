import UserModel from "../../../entities/user";
import IUserRepository from "../../repository/user-repository";

export interface ILoginUseCase {
  execute(email: string, password: string): Promise<UserModel>;
}
export default class LoginUseCase implements ILoginUseCase {
  private _userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }
  async execute(email: string, password: string): Promise<UserModel> {
    try {
      return await this._userRepository.login(email, password);
    } catch (error) {
      throw error;
    }
  }
}
