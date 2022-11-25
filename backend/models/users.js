import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    progress: [{
        module1:{
            progress:{
                type: Array
            }
        },
        module2:{
            progress:{
                type: Array
            }
        }    ,
        module3:{
            progress:{
                type: Array
            }
        },
        module4:{
            progress:{
                type: Array
            }
        },
        module5:{
            progress:{
                type: Array
            }
        },
        module6:{
            progress:{
                type: Array
            }
        }                          
    }],
    complete: { type: Boolean},
    github: {type: String}

});
export default UserSchema;
