class Config{
    //backend routes
    public baseURL = "http://localhost:3001";
    public getAllTeams = this.baseURL+"/api/devTeam";
    public teamById = this.baseURL+"/api/team-meet/";
    public newMeeting = this.baseURL+"/api/new_meeting";
    public getAllMeetings = this.baseURL+"/api/meetings";

}

const appUrl = new Config();
export default appUrl;