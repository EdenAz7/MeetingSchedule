import axios from "axios";
import { Meeting } from "../meetingModel";
import appUrl from "./config";

class MeetingService {
    public async teamBy_Id(id: number): Promise<Meeting[]> {
        const response = await axios.get<Meeting[]>(appUrl.teamById + id);
        return response.data;
    }
    public async getAllTeams(): Promise<Meeting[]> {
        const response = await axios.get<Meeting[]>(appUrl.getAllTeams);
        return response.data;
    }
    public async getAllMeetings(): Promise<Meeting[]> {
        const response = await axios.get<Meeting[]>(appUrl.getAllMeetings);
        return response.data;
    }
    public async newMeeting(meeting:Meeting): Promise<void> {
        const response = await axios.post<Meeting[]>(appUrl.newMeeting, meeting)
    }
}
const meetingService = new MeetingService();
export default meetingService;