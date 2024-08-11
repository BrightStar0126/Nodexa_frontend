'use client'
import { api } from "./api";

type LogInDataType = {
  email: string,
  password: string,
}

export const userLogin = async (data: LogInDataType) => {
  let result: any;
  api.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  await api.post(`/user/login/`, data).then(res => {
    result = res;
    localStorage.setItem('token', res.data.refresh_token);
  })
    .catch(error => {
      console.log(error);
    });

    return await result;
}

export const userRegister = async (data: LogInDataType) => {
  api.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  await api.post(`/user/register/`, {
    email: data.email,
    password: data.password
  }).then(res => {
    console.log(res);
  })
    .catch(error => {
      console.log(error);
    });
}

export const activateEmail = async (activation_token: string) => {
  api.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  const { data } = await api.post("/user/activation", {
    activation_token,
  });
  return data;
};

export const forgetPassword = async (email: string) => {
  api.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  const { data } = await api.post("/user/forgot", {
    email,
  });
  return data;
};

export const resetPassword = async (password: string) => {
  api.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  const { data } = await api.post("/user/reset", {
    password,
  });
  return data;
};

export const userGet = async () => {
  api.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  let result: any;
  await api.get(`/user/infor/`)
    .then(res => {
      console.log("auth action ===>>>>> ", res.data);
      result = res.data;
    })
    .catch(error => {
      console.log(error);
    });
  return await result;
}

export const userUpdate = async (data: LogInDataType) => {
  let result: any;
  api.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  await api.patch(`/user/update/`, data)
    .then(res => {
      console.log("auth Update action ===>>>>> ", res.data);
      result = res.data.user;
    })
    .catch(error => {
      console.log(error);
    });
  return await result;
}