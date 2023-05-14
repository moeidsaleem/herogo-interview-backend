import { Service, Inject } from "typedi";
import config from "../config";

import { randomBytes } from "crypto";
import { IUser, IUserInput } from "../interfaces/IUser";

@Service()
export default class UserService {
  constructor(@Inject("logger") private logger) {}

  public async PrintSampleInfo(): Promise<{ response: any }> {
    this.logger.silly("Calling PrintSampleInfo");

    return { response: "" };
  }
}
