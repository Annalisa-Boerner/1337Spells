const base_url = "http://localhost:8080/api";

export const fetchAllCantrips = async () => {
     try {
          const response = await fetch(`${base_url}/cantrips`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};

export const fetchSingleCantrip = async (id) => {
     try {
          const response = await fetch(`${base_url}/cantrips/${id}`);
          const result = await response.json();
          console.log(result);
          return result;
     } catch (error) {
          console.error(error);
     }
};
