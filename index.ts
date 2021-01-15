import { loadConfig } from './config/index';
loadConfig();

import { getRepoLangSizes, getUserRepos } from "./src/httpSvc/index";
import { mergeLanguages, formatLanguageOutput } from './src/dataSvc/index';
import { writeFile } from 'fs';

const user = process.argv.slice(2)[0] || 'elliottregan';

const getUserLanguageStats = async (username:string = 'elliottregan'):Promise<any> => {
  const repos = await getUserRepos(username);
  const sizes = await Promise.all(repos.map(r => getRepoLangSizes(username, r.name)));
  return sizes
}

const createOutputString = (languageData: any[]):string => {
  return `Language repartition for ${user}
${formatLanguageOutput(mergeLanguages(languageData))}`
}

const createOutputFile = (languageStats: string) => {
  writeFile(`./dist/${user}.txt`, languageStats, (err) => {
    if (err) console.error(err)
  });
}

getUserLanguageStats(user)
  .then(createOutputString)
  .then(createOutputFile);

