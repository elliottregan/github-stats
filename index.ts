import { loadConfig } from './config/index';
loadConfig();

import { getRepoLangSizes, getUserRepos } from "./src/httpSvc/index";
import { mergeLanguages, formatLanguageOutput, sortLanguages } from './src/dataSvc/index';
import { writeFile } from 'fs';

const user = process.argv.slice(2)[0] || 'elliottregan';

const getUserLanguageStats = async (username:string):Promise<any> => {
  const repos = await getUserRepos(username);
  const sizes = await Promise.all(repos.map(r => getRepoLangSizes(username, r.name)));
  return sizes
}

const createOutputString = (languageData:any):string => {
  return `Language repartition for ${user}
${formatLanguageOutput(languageData)}`
}

const createOutputFile = (languageStats:string) => {
  writeFile(`./dist/${user}.txt`, languageStats, (err) => {
    if (err) console.error(err)
  });
}

getUserLanguageStats(user)
  .then(mergeLanguages)
  .then(sortLanguages)
  .then(createOutputString)
  .then(createOutputFile);
