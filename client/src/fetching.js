const api_url = `https://plankton-app-5feg7.ondigitalocean.app/api`;
// const api_url = "http://localhost:8080/api"

//REGISTER
export const registerCharacter = async (username, password, name) => {
    try {
        console.log("entering registerCharacter", username, password, name);
        const response = await fetch(`${api_url}/characters/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                name,
            }),
        });
        // console.log("response in fetching registerCharacter ", response);
        const result = await response.json();
        // console.log("register character result ", result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

//LOGIN
export const login = async (username, password, name) => {
    try {
        console.log("entering login in fetching");
        const response = await fetch(`${api_url}/characters/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                name,
            }),
        });
        // console.log("fetching: response in the login pre json", response)
        if (response.redirected === false) {
            // console.log("if clause in login in fetching")
            return response;
        } else {
            const result = await response.json();
            // console.log("else clause: login result from fetching ", result);
            return result
        }
    } catch (error) {
        console.error(error);

    }
};

//LOGOUT
export const logout = async () => {
    try {
        const response = await fetch(`${api_url}/characters/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
