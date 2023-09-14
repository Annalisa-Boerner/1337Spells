const api_url = `http://localhost:8080/api`;

export const registerCharacter = async (username, password, name) => {
     try {
          console.log("entering registerCharacter");
          const response = await fetch(`${api_url}/characters/register`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    character: {
                         username,
                         password,
                         name,
                    },
               }),
          });
          const result = await response.json();
          console.log("register character result ", result);
          return result;
     } catch (error) {
          console.error(error);
     }
};
