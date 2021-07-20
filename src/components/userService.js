import authHeader from './authHeader';
import AuthService from './AuthService';

const API_URL = 'http://localhost:8080/';

class userService {
  getTasks() {
    return fetch(API_URL + 'tasks', { method:'GET' , headers: authHeader() }).then((res)=>res.json());
  }
  makeSubmissions(taskid,taskname,subtaskCnt,SubmissionAnswers){
    return fetch(API_URL + 'submissions', { method:'POST' , headers: authHeader(),
                  body: JSON.stringify({
                    "Username": AuthService.getCurrentUser().User.Username, 
                    "TaskID": taskid,
                  "TaskSubtasks": subtaskCnt,
                "SubmissionAnswers":SubmissionAnswers}) })
                .then((data)=>console.log(data.json()),(err)=>console.log(err));
  }
  getScoreboard() {
    return fetch(API_URL + 'ranking', { method:'GET' , headers: authHeader() }).then((res)=>res.json());
  }
}

export default new userService();