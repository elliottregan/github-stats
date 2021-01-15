import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {Authorization: `token ${process.env.OAUTH_TOKEN}`}
});

export async function getRepoLangSizes(username:string, repo:string):Promise<any> {
  try {
    const resp = await instance.get(`/repos/${username}/${repo}/languages`)
    return resp.data;
  } catch(err) {
    console.error('ERROR in getRepoLangSizes', err.response.data)
    return {};
  }
}

export async function getUserRepos(username:string):Promise<Array<{name:string, url:string}>> {
  try {
    const resp = await instance.get(`/users/${username}/repos`)
    return resp.data;
  } catch(err) {
     console.error('ERROR in getUserRepos', err.response.data)
     return [];
  }
}
