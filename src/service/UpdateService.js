import axios from "axios";

const FACULTY_API_BASE_URL="http://localhost:9292/api/v1/users"

class FacultyService{

    getUserById(id){
        return axios.get(FACULTY_API_BASE_URL + "/" +id);
    }

    updateUser(user, id){
        return axios.put(FACULTY_API_BASE_URL + `/${id}`, user);
    }

}

export default new FacultyService();