import axios from "axios";

export default {

    getUsers: function() {
        return axios.get("/api/users");
    },

    createUsers: function(userData) {
        console.log("createUsers");
        return axios.post("/api/users", userData);
    }



}