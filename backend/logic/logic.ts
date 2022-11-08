import Dev_team from '../model/dev_team'
import Meeting from '../model/meeting';
import dal from "../utils/dal_mysql";
import { OkPacket } from "mysql";
import dal_mysql from "../utils/dal_mysql";



async function getAllMeetings(): Promise<Meeting[]> {
  const sql = `SELECT meeting.*, dev_team.devTeam_name
  FROM meeting JOIN dev_team
  ON meeting.devTeam_id = dev_team.id`;
  const result = await dal.execute(sql)
  return result;
};



async function getAllDevTeam(): Promise<Dev_team[]> {
  const sql = `SELECT * FROM meetings.dev_team;`;
  const result = await dal.execute(sql);
  return result;
};


async function teamBy_Id(teamId:Number):Promise<Meeting>{
  const sql = `SELECT meeting.*, dev_team.devTeam_name
  FROM dev_team JOIN meeting
  ON dev_team.id = meeting.devTeam_id
  WHERE dev_team.id =${teamId};`;
  const result = await dal.execute(sql)
  return result;
}

async function addMeeting(meeting:Meeting):Promise<Meeting>{
  const sql = `INSERT INTO meeting Values(
      DEFAULT,
      ${meeting.devTeam_id},
      '${meeting.start_meet}',
      '${meeting.end_meet}',
      '${meeting.description}',
      '${meeting.room}'
      )`;
    const result:OkPacket = await dal.execute(sql);
    meeting.id = result.insertId;
    return meeting;
}


export default {
  getAllDevTeam,
  teamBy_Id,
  addMeeting,
  getAllMeetings
};

