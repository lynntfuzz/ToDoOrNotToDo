import axios from "axios";

export default {

    getUsers: function() {
        return axios.get("/api/users");
    },

    createUsers: function() {
        return axios.post("/api/users");
    }



}