const base_url = "http://localhost:8080/api";

export const fetchAllArcaneRecoveries = async () => {
     try {
          const response = await fetch(`${base_url}/arcanerecoveries`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};

export const fetchSingleArcaneRecovery = async (id) => {
     try {
          const response = await fetch(`${base_url}/arcanerecoveries/${id}`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};
