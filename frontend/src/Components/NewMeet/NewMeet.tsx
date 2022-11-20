import { SyntheticEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Meeting } from "../../meetingModel";
import meetingService from "../../utils/meetingService";
import "./NewMeet.css";

function NewMeet(): JSX.Element {
    const [meeting, setMeeting] = useState<Meeting[]>([]);
    const { register, handleSubmit } = useForm<Meeting>();
    const [userData, setData] = useState<Meeting>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +(params.id || '');

    async function send(meeting: Meeting) {
        try {
            console.log(meeting);
            await meetingService.newMeeting(meeting);
            //manual routing....
            navigate("/select");
        } catch (err: any) {
            alert(err.message);
        }
    }
    //navigate .....

    useEffect(() => {
      
        meetingService.getAllTeams()
            .then(meeting => setMeeting(meeting))
            .catch(err => alert(err.message));
    }, []);
    return (
        <div className="NewMeet">
            <form onSubmit={handleSubmit(send)}>
                <h2>Add Meeting</h2>

                <label>Team Name:</label>
                <select defaultValue="" {...register("devTeam_id")} required>
                    <option disabled value="">Select Payment method</option>
                    {meeting.map(item => <option key={item.id} value={item.id}>{item.devTeam_name}</option>)}
                </select>
                <label>Start</label>
                <input type="datetime-local" {...register("start_meet")} value={userData?.start_meet} required/>

                <label>End</label>
                <input type="datetime-local" {...register("end_meet")} value={userData?.end_meet} required/>

                <label>Description</label>
                <input type="text" {...register("description")} value={userData?.description} required/>

                <label>Room</label>
                <input type="text" {...register("room")} value={userData?.room} />
                <button style={{ backgroundColor: "lightblue", color: "black" }}>Update</button>
            </form>
        </div>
    );
}

export default NewMeet;