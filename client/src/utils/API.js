import axios from "axios";

export default {

    getUsers: function() {
        return axios.get("/api/users");
    },

    createUsers: function(userData) {
        return axios.post("/api/users", userData);
    }



}