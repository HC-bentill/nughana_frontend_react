import { destroyItem, getItem, storeItem } from "./api/storage.service";
import axios from "axios";

export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx".replace(/[x]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    return r.toString(16);
  });
};

export const valueConvertor = (type, value) => {
  if (type === "bool") return value === "true";
  return value;
};

export const currency = "GHC";

export const ComponentView = {
  configEditor: "config-editor",
  preview: "preview",
  entry: "entry",
  entryPreview: "entry-preview",
};

export const truncateText = (strn, len) => {
  if (strn?.length > len) {
    strn = strn.substring(0, len) + "...";
    return strn;
  } else {
    return strn;
  }
};

export const getUrlLastSegement = () => {
  return window.location.pathname.split("/").pop();
};

let options;
export const setBaseApi = (v) => (options = { apiBaseUrl: v });
export const getConfig = () => {
  return options;
};

export const getUserSession = () => {
  try {
    let user = getItem("u_user_info");
    if (user === "" || user === null) return undefined;
    return JSON.parse(user);
  } catch (error) {
    return undefined;
  }
};

export const cacheUserData = (userInfo, token, expiry) => {
  storeItem("u_user_info", userInfo);
  storeItem("u_token", token);
  storeItem("u_token_expiry", expiry);
};

export const clearUserData = () => {
  window.localStorage.removeItem("persist:root");
  window.localStorage.clear();
};

export const apiAxios = (baseURL) => {
  const instance = axios.create({
    // baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    baseURL: 'https://api.afrotango.com/wp-json',
  });
  let token = getItem("u_token");
  if (token != null && token !== "") {
    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
  }

  instance.interceptors.response.use(
    (response) => {
      if (response.status === 200 && response.data.data == 401) {
        clearUserData();
      }
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        clearUserData();
      }
      if (error.response.status === 429) {
        return Promise.resolve(error);
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

export function validator(rules, value, formCollection) {
  for (let i = 0; i < rules.length; i++) {
    const ruleKey = rules[i].rule;
    const message = rules[i].message;
    const data = rules[i].data;

    if (
      ruleKey === "empty" &&
      (value === null ||
        value === "" ||
        value === undefined ||
        !value ||
        value?.length === 0)
    ) {
      return message;
    }

    if (ruleKey === "min-len" && data && value.length < Number(data)) {
      return message;
    }

    if (
      ruleKey === "compare" &&
      formCollection &&
      value != formCollection[data]?.value
    ) {
      return message;
    }

    if (ruleKey === "max-len" && data && value.length > Number(data)) {
      return message;
    }

    if (
      ruleKey === "msisdn" &&
      !new RegExp("^(" + data + "|0)?(\\d{9})$", "i").test(value)
    ) {
      return message;
    }

    if (ruleKey === "url" && !/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
      return message;
    }
    if (ruleKey === "regex" && !new RegExp(data).test(value)) {
      return message;
    }

    if (
      ruleKey === "email" &&
      !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(value)
    ) {
      return message;
    }

    if (ruleKey === "stringonly" && /\d/.test(value)) {
      return message;
    }

    if (ruleKey === "alphanumeric" && !/^[a-zA-Z0-9_]*$/.test(value)) {
      return message;
    }

    if (ruleKey === "numberonly" && !/\d/.test(value)) {
      return message;
    }

    if (ruleKey === "date" && !/^\d{4}([-])\d{2}\1\d{2}$/.test(value)) {
      return message;
    }
  }
}

export const isValidPhoneNumber = (number) =>
  /^([0][0-9]{9}|[1-9][0-9]{8})$/.test(number);

export function base64ToFile(base64, filename) {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)[1]; // Get the mime type
  const bstr = atob(arr[1]); // Decode base64
  const n = bstr.length;
  const u8arr = new Uint8Array(n);

  for (let i = 0; i < n; i++) {
    u8arr[i] = bstr.charCodeAt(i);
  }

  return new File([u8arr], filename, { type: mime });
}

export function extractUsername(email) {
  // Split the email at '@' and take the first part
  const username = email.split("@")[0];

  // Remove any characters that are not letters, numbers, hyphens, underscores, or dots
  const cleanUsername = username.replace(/[^a-zA-Z0-9-_\.]/g, "");

  return cleanUsername;
}
