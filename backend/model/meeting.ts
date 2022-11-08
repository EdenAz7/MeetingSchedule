class Meeting{
    public id: number | undefined;
    public devTeam_id:number | undefined;
    public start_meet:string | undefined;
    public end_meet:string | undefined;
    public description:string | undefined;
    public room: string | undefined;

    constructor(meeting:Meeting){
        this.devTeam_id = meeting.devTeam_id;
        this.start_meet = meeting.start_meet;
        this.end_meet = meeting.end_meet;
        this.description = meeting.description;
        this.room = meeting.room;
    }
}


export default Meeting;