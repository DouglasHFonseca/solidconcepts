import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;

      const newUser = this.createUserUseCase.execute({ name, email });

      return response.status(201).send(newUser);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { CreateUserController };
