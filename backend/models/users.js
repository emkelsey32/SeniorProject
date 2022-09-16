import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
     
lastname: {
        type: String,
    },
    firstname: {
        type: String,
    },

});
const Users = mongoose.model('Users', UserSchema, 'users');
export default Users;
