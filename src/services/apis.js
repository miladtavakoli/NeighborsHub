import apiConfig from "services/apiConfig";
import axios from "axios";
import { MAP_API_KEY, GEOCODE_API_KEY } from "constants";
const Apis = {
  auth: {
    preRegister: (data) =>
      apiConfig({ url: "/auth/pre-register", method: "post", data }),
    otpSignupChecking: (data) =>
      apiConfig({ url: "/auth/verify-pre-register", method: "post", data }),
    register: (data) =>
      apiConfig({ url: "/auth/register", method: "post", data }),
    passwordLogin: (data) =>
      apiConfig({ url: "/auth/login", method: "post", data }),
    optSending: (data) =>
      apiConfig({ url: "/auth/send-otp-login", method: "post", data }),
    optLoginChecking: (data) =>
      apiConfig({ url: "/auth/verify-otp-login", method: "post", data }),
    logout: () => apiConfig({ url: "/auth/logout", method: "get" }),
    googleAuth: (data) =>
      apiConfig({ url: `/auth/login/google?code=${data.code}`, method: "get" }),
  },
  user: {
    myInfo: () => apiConfig({ url: "/me", method: "get" }),
    sendOtpToEmail: (data) =>
      apiConfig({ url: "/auth/send-verify-email", method: "post", data }),
    verifyEmailOtp: (data) =>
      apiConfig({ url: "/auth/verify-email", method: "post", data }),
    sendOtpToPhone: (data) =>
      apiConfig({ url: "/auth/send-verify-mobile", method: "post", data }),
    verifyPhoneOtp: (data) =>
      apiConfig({ url: "/auth/verify-mobile", method: "post", data }),
  },
  address: {
    getIpLocation: () =>
      axios.get(
        `https://api.maptiler.com/geolocation/ip.json?key=${MAP_API_KEY}`
      ),
    turnCordinateToAddress: (cordinate) =>
      axios.get(
        `https://geocode.maps.co/reverse?lat=${cordinate[0]}&lon=${cordinate[1]}&api_key=${GEOCODE_API_KEY}`
      ),
    turnAddressToCordinate: (address) =>
      axios.get(
        `https://geocode.maps.co/search?q=${address}&api_key=${GEOCODE_API_KEY}`
      ),
    createAddress: (data) =>
      apiConfig({ url: "/me/address", method: "post", data }),
    updateAddress: ({ id, ...data }) =>
      apiConfig({ url: `/me/address/${id}`, method: "put", data }),
    deleteAddress: ({ id }) =>
      apiConfig({ url: `/me/address/${id}`, method: "delete" }),
    getListOfAddress: (data) =>
      apiConfig({ url: "/me/address", method: "get" }),
  },
  posts: {
    createPost: (data) =>
      apiConfig({
        url: "/post/me/create",
        method: "post",
        data,
        isFormData: true,
      }),
    getPosts: (data) =>
      apiConfig({
        url: `/post/?${data.long ? "longitude=" + data.long + "&" : ""}${
          data.lat ? "latitude=" + data.lat + "&" : ""
        }${data.zoom ? "distance=" + data.zoom + "&" : ""}${
          data.hashtag ? "hashtag_title=" + data.hashtag + "&" : ""
        }${data.offset ? "offset=" + data.offset + "&" : ""}${
          data.limit ? "limit=" + data.limit + "&" : ""
        }${data.count ? "count=" + data.count + "&" : ""}`,
        method: "get",
      }),
    getMyPosts: (data) => apiConfig({ url: "/post/me", method: "get", data }),
    setUniqueLocation: (data) =>
      apiConfig({
        url: `/post/location-count?${
          data.offset ? "offset=" + data.offset + "&" : ""
        }${data.limit ? "limit=" + data.limit + "&" : ""}${
          data.count ? "count=" + data.count + "&" : ""
        }`,
        method: "get",
      }),
    deletePost: (data) =>
      apiConfig({ url: `/post/me/${data.id}`, method: "delete" }),
  },
};

export default Apis;
