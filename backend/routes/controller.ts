import express, { NextFunction, Request, response, Response } from "express";
import logic from "../logic/logic";
import Meeting from "../model/meeting";

const router = express.Router();


//get from is of dev teams
router.get(
  "/api/team-meet/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = +request.params.id;
      const singleProduct = await logic.teamBy_Id(id);
      response.status(200).json(singleProduct);
    } catch (err: any) {
      next(err)
    }
  });

router.get(
  "/api/devTeam",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const products = await logic.getAllDevTeam();
      response.status(200).json(products);
    } catch (err: any) {
      next(err)
    }
  }
)
router.get(
  "/api/meetings",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const products = await logic.getAllMeetings();
      response.status(200).json(products);
    } catch (err: any) {
      next(err)
    }
  }
)

router.post("/api/new_meeting", async (request:Request, response:Response, next:NextFunction) => {
  try{
    let meeting = new Meeting(request.body);
    const newMeeting = await logic.addMeeting(meeting);
    response.status(201).json(newMeeting);

  } catch (err:any){
    next(err);
  }
});

export default router;
