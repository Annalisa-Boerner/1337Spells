const api_url = `http://localhost:8080/api`;

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
          console.log("response in fetching registerCharacter ", response);
          const result = await response.json();
          console.log("register character result ", result);
          return result;
     } catch (error) {
          console.error(error);
     }
};

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
          const result = await response.json();
          console.log("login result from fetching ", result);
          return result;
     } catch (error) {
          console.error(error);
     }
};

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
