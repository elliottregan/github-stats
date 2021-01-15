type LangBytePair = Array<[string, number]>;

export const pickKeys = ({ name = '', url = '' }): { name:string, url:string } => ({ name, url });

export const mergeLanguages = (data:Array<any>): Array<any> => {
  const langSums = data.reduce((allRepoLangs, repoLangs) => {
    for (let [key, value] of Object.entries(repoLangs)) {
      allRepoLangs[key] = allRepoLangs[key] ? allRepoLangs[key] + value : value;
    }
    return allRepoLangs;
  }, {})
  return Object.entries(langSums);
}

export const sortLanguages = (data:Array<LangBytePair>):Array<LangBytePair> => {
  const sortedKeys = data.sort((a:LangBytePair, b:LangBytePair) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    return 0;
  });
  return data;
}

export const formatLanguageOutput = (languageData:Array<LangBytePair>) => {
  let output = '';
  languageData.map(([bytes, lang]) => {
    output += `* ${bytes}: ${lang}
`
  });
  return output;
}
