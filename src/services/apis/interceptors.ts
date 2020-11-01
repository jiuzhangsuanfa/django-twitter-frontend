import Axios from 'axios';

export const axios = Axios.create();

export const loadingState = {
  count: 0
};

export function showLoading() {
  // console.log('requesting', loadingState.count);
  if (++loadingState.count > 0) {
    document.getElementById('loading')?.classList.remove('hidden')
  }
}

export function hideLoading() {
  // console.log('responsing', loadingState.count);
  if (--loadingState.count <= 0) {
    document.getElementById('loading')?.classList.add('hidden');
  }
}

axios.interceptors.request.use(config => {
  showLoading();
  return config;
});

axios.interceptors.response.use(
  response => {
    hideLoading();
    return response;
  },
  error => {
    hideLoading();
    // TO-DO: add snack bar to notice error message
    throw error;
  }
);
