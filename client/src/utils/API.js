import axios from "axios";

export default {

    // getUsers: function() {
    //     return axios.get("/api/users");
    // },

    createUsers: function(userData) {
        console.log("createUsers");
        return axios.post("/api/users", userData);
    },

    loginUser: function(loginData) {
        console.log("login the user");
        return axios.post("/api/login", loginData);
    }
}