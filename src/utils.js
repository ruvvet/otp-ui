const API = process.env.API_HOST;

export default async function OTPRequest(url, options) {
  // get the code from local storage via the key UWU_TOKEN
  const userToken = localStorage.getItem('OTP_TOKEN');

  const headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    'X-OTP-User': userToken,
  };

  const response = await fetch(`${API}${url}`, { ...options, headers });

  if (response.status === 401) {
    return '401';
  }
  const contentType = response.headers.get('Content-Type');

  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  return response;
}
