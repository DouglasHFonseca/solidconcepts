import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const showUser = this.showUserProfileUseCase.execute({ user_id });
      return response.status(200).send(showUser);
    } catch (err) {
      return response.status(404).send({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
