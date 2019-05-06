import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization:
          "Client-ID 5e8bea06b99eca0c08679707c4350f9ac1337e766a489853464c5c72962228f2"
      }
})