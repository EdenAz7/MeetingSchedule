import { useEffect, useState } from "react";
import { Meeting } from "../../meetingModel";
import meetingService from "../../utils/meetingService";
import "./Select.css";
function Select(): JSX.Element {
    const [meetings, setData] = useState<Meeting[]>([]);
    const [teams, setTeam] = useState<Meeting[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<Meeting>();
  
    useEffect(() => {
      meetingService
        .getAllMeetings()
        .then((response) => {
          setData(response);
          console.log(response);
        })
        .then(() => console.log(meetings))
        .catch((err) => alert(err.message));
    }, []);
  
    useEffect(() => {
      meetingService
        .getAllTeams()
        .then((response) => {
          setTeam(response);
          console.log(response);
        })
        .then(() => console.log(teams))
        .catch((err) => alert(err.message));
    }, []);
  
    const handleChange = ({ target }: any) => {
      setSelectedTeam(target.value);
    };
  
    return (
      <div className="Select">
        <select defaultValue="" onChange={handleChange}>
          <option disabled value="">
            Select Team
          </option>
          {teams.map((item) => (
            <option key={item.id} value={item.devTeam_id}>
              {item.devTeam_name}
            </option>
          ))}
        </select>
  
        <table>
          <thead>
            <tr>
                <th>Team Id</th>
                <th>Team Name</th>
                <th>Start Meeting</th>
                <th>End Meeting</th>
                <th>Description</th>
                <th>Room</th>
            </tr>
          </thead>
          <tbody>
            {meetings
              .filter((item) => {
                return item.devTeam_name === selectedTeam;
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.devTeam_id}</td>
                  <td>{item.devTeam_name}</td>
                  <td>{item.start_meet?.toLocaleString().split("T")[0]} {item.start_meet?.toLocaleString().split("T")[1]}</td>
                  <td>{item.end_meet?.toLocaleString().split("T")[0]} {item.end_meet?.toLocaleString().split("T")[1]}</td>
                  <td>{item.description}</td>
                  <td>{item.room}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Select;
