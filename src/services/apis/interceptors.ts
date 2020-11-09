import Axios from 'axios';

export const axios = Axios.create();

const loadingState = {
  count: 0
};

function showLoading() {
  // console.log('requesting', loadingState.count);
  if (++loadingState.count > 0) {
    document.getElementById('loading')?.classList.remove('hidden')
  }
}

function hideLoading() {
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
    return response.data;
  },
  error => {
    hideLoading();
    // TO-DO: add snack bar to notice error message
    throw error;
  }
);
