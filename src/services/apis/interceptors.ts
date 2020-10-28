import Axios from "axios";

export const loadingState = {
  count: 0
};

export function showLoading() {
  console.log('requesting');
  // if (count > 0 && !document.getElementById('loading')) {
  //   document.getElementById('loading');
  // }
}

export function hideLoading() {
  console.log('responsing');
  // if (count <= 0) {
  //   // document.getElementById('loading')?.setAttribute
  // }
}

Axios.interceptors.request.use(config => {
  showLoading();
  return config;
});

Axios.interceptors.response.use(response => {
  hideLoading();
  return response;
})
