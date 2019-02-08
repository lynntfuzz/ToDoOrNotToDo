import axios from "axios";
require('axios-debug')(axios);

export default {

    getUsers: function() {
        return axios.get("/api/users");
    }

}