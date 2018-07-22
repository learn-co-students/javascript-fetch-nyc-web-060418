const app = "I don't do much.";

const token = '10a4d2373d8de7da3b8b1dcfdb441dca548ffc33'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
