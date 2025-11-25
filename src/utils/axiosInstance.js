import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // nếu bạn dùng cookie/session
  headers: {
    "Content-Type": "application/json"
  }
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Ví dụ: gắn token nếu có
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Ví dụ: xử lý lỗi 401
    if (error.response?.status === 401) {
      console.warn("Unauthorized. Redirecting to login...");
      // Có thể redirect hoặc logout
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
