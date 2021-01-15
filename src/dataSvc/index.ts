export const pickKeys = ({ name = '', url = '' }): { name:string, url:string } => ({ name, url });

export const mergeLanguages = (data:Array<any>) => {
  return data.reduce((allRepoLangs, repoLangs) => {
    for (let [key, value] of Object.entries(repoLangs)) {
      allRepoLangs[key] = allRepoLangs[key] ? allRepoLangs[key] + value : value;
    }
    return allRepoLangs;
  }, {})
}

export const formatLanguageOutput = (languageData:{bytes:number, lang:string}) => {
  let output = '';
  Object.entries(languageData).map(([bytes, lang]) => {
    output += `* ${bytes}: ${lang}
`
  });
  return output;
}
