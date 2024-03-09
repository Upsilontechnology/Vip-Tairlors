import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000/'
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

// import axios from "axios";

// const axiosPublic = axios.create({
//   baseURL: "https://super-shop-server-mu.vercel.app/",
// });

// axiosPublic.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     console.error("Error fetching data:", error);
//     return Promise.reject(error);
//   }
// );

// const useAxiosPublic = () => {
//   return axiosPublic;
// };

// export default useAxiosPublic;