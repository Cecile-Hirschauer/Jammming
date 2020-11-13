const clientId = '614fb74a6aea4db3bc09b58e38c84ceb';
const redirectUri = 'http://localhost:3000/';

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
      window.location = accessUrl;
    }

    //Check for access token match
    const accessToken = window.location.href.match(/access_token=([^&]*)/);;
    const expiresToken = window.location.href.match(/expires_in=([^&]*)/);

    if (accessToken && expiresToken) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // This clers the parameters, allowing us to grab a new access token when it expires.
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToke;
    }

  }


};

export default Spotify;