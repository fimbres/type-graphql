import { Query, Resolver, Mutation, Arg } from "type-graphql";

import { CreateUserInput, User } from "../schema/user.schema";
import UserService from "../services/user.service";

@Resolver()
export default class UserResolver {
    constructor(private userService: UserService){
        this.userService = new UserService();
    }

    @Mutation(() => User)
    createUser(@Arg('input') input: CreateUserInput) {
        return this.userService.createUser(input);
    }

    @Query(() => User)
    me() {
        return {
            _id: "123",
            name: "Isaac Fimbres",
            email: "fimbres@isaac.com"
        }
    }
}