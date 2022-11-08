import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Meeting } from "../../meetingModel";
import "./ListAll.css";
import axios from "axios";

function ListAll(): JSX.Element {
    const [data,setData] = useState<Meeting>();
    const [meeting,setMeeting]= useState<Meeting[]>([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        const id = +(params.id || 1);
        axios.get<Meeting[]>("http://localhost:3001/api/team-meet/"+id)
        .then(response=>{setData(response.data[0])})
        {console.log(id)}
    },[])

    return (
        <div className="ListAll">
			<h1>Meetings</h1>
            <hr />
            <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Team Id</th>
                            <th>Team Name</th>
                            <th>Start Meeting</th>
                            <th>End Meeting</th>
                            <th>Description</th>
                            <th>Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meeting.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.devTeam_id}</td>
                                <td>{item.devTeam_name}</td>
                                <td>{item.start_meet}</td>
                                <td>{item.end_meet}</td>
                                <td>{item.description}</td>
                                <td>{item.room}</td>
                            </tr>
                            )}
                    </tbody>
                </table>
        </div>
    );
}

export default ListAll;
