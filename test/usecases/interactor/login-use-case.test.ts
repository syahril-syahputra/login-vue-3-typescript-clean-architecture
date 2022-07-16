import { describe, expect, it, vi } from "vitest";
import user from "../../../src/domain/entities/user";
import IUserRepository from "../../../src/domain/usecases/repository/user-repository";
import LoginUseCase from "../../../src/domain/usecases/interactor/user/login-use-case"
import UserModel from "../../../src/domain/entities/user";
describe("Testing Login Use Case", () => {
  class mock implements IUserRepository {
    login(email: string, password: string): Promise<user> {
      throw new Error("Method not implemented.");
    }
  }

  it("Should call repository", async () => {
    const repository = new mock()
    vi.spyOn(repository, "login").mockImplementation(()=> Promise.resolve(new UserModel(1, "Tate", "Naisey", "testing", "1234")))
    const usecase = new LoginUseCase(repository)
    const user = await usecase.execute("sample", "sample")
    expect(repository.login).toHaveBeenCalledWith("sample", "sample")

  })
  it("Should Return Error", async () => {
    const repository = new mock()
    vi.spyOn(repository, "login").mockImplementation(()=> Promise.reject("Error"))
    const usecase = new LoginUseCase(repository)
    await expect(usecase.execute("sample", "sample")).rejects.toThrow("Error")
  })
});
