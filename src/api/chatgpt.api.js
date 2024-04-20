import axios from "axios";
let baseUrlApi = "/brands";

class ChatGptApi {
    async ask(promp, context) {
        // Ensure the base URL and endpoint are correctly set up

        let url = `${baseUrlApi}/ask`;
    
        // Prepare the request body and headers
        const data = {
          prompt: promp,  
          context: context
        };
        const headers = {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer your_auth_token',  // Uncomment and use the correct token if needed
        };
        try {
          const response = await axios.post(url, data, { headers: headers });
          return response.data;  // Return the response data from the API
        } catch (error) {
          console.error('Error making the API call:', error);
          throw error;  // Rethrow or handle the error as appropriate for your application
        }
      }

}

export default new ChatGptApi();
