// This file serves as an index for all available API calls, broken down into easy to use functions.

// GLOBAL VARIABLES

// Master request, don't touch this one

const hostUrl = 'http://localhost:3000/';

async function request(url, body) {
    let res = await fetch(hostUrl + url,
        {
            credentials: 'omit',
            headers: {
                accept: 'application/json, text/javascript, */*; q=0.01',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json;charset=UTF-8',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'cross-site',
            },
            referrerPolicy: 'no-referrer-when-downgrade',
            body: JSON.stringify(body),
            method: 'POST',
            mode: 'cors',
        },
    );
    res = await res.json();
    console.log(res)
    return res;
}

// --- User Creation and Authentication --- // -------------------------------------------------------------------------

export async function createUser(firstname, lastname, username, password, email) {
    return await request('users/create', {
        firstname: firstname,   // type: String
        lastname: lastname,     // type: String
        username: username,     // type: String
        password: password,     // type: String
        email: email,           // type: String
    });
}

export async function loginUser(username, password) {

    let res = await request('users/login', {
        username: username,
        password: password
    });
    console.log(res)
    if(res.token === undefined) {
        return false;
    }
    console.log(res.token)
    return res.token    
    
}

// --- Get Member Data ---------------------------------- // -------------------------------------------------------------------------

export async function getUsers() {
    let res = await fetch(hostUrl + 'users');
    return await res.json();
}

export async function getUser(token) {
    let res = await request('users/getUser', {
        token: token,
    });
    return res;
}

export async function getEvents() {
    let res = await fetch(hostUrl + 'events');
    return await res.json();
}

export async function progressCourse(user, progress){
    console.log(progress)
    console.log("fjdslkf")
    let res = await request('users/progressCourse',{
        username: user,
        updatedValue: progress
    });

    console.log(res.user)
    return res.user
}

export async function resetPassword(user, updatedPass){
    console.log("fjdslkf")
    let res = await request('users/resetPassword',{
        username: user,
        updatedValue: updatedPass
    });

    console.log(res.user)
    return res.user
}

export async function changeProfile(user, progress){
    console.log(progress)
    console.log("fjdslkf")
    let res = await request('users/updateInfo',{
        username: user,
        updatedValue: progress
    });

    console.log(res.user)
    return res.user
}

// --- Event Creation and Attendance--------------------- // -------------------------------------------------------------------------

export async function createEvent(title, description, date, startTime, endTime, password) {
    return await request('events/create',{
        title: title,               // type: String
        description: description,   // type: String
        date: date,                 // type: Date
        startTime: startTime,       // type: String
        endTime: endTime,           // type: String
        password: password,         // type: String
    });
}

export async function attendEvent(token, eventID, password) {
    console.log(token, eventID, password);
    return await request('events/attend', {
        token: token,               // type: String
        eventID: eventID,           // type: String
        password: password          // type: String
    });
}