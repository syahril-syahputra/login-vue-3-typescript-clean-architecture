import {describe, expect, it} from "vitest"
import UserLocalRepository from "../../../src/data/local/user-local-repository";
import UserModel from "../../../src/domain/entities/user";

describe("Test Login ", () =>{
   
    it("Should Login Success", async () => {
        const repository = new UserLocalRepository();

        const user = await repository.login("tnaisey0@wikimedia.org", "Lg68SO9n8")
        expect(user).toBeDefined();
        expect(user).toBeInstanceOf(UserModel);
        expect(user.firstName).toBe("Tate");
        expect(user.lastName).toBe("Naisey");
    })
    it("Should Error User Not Found When Login", async() => {
        const repository = new UserLocalRepository();
        await expect(repository.login("aaa@wikimedia.org", "aaa")).rejects.toThrow("User Not Found");
    })
    
})