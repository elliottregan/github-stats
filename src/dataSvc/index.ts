type LangBytePair = [string, number];

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
  return data.sort((a:LangBytePair, b:LangBytePair) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    return 0;
  });
}

export const formatLanguageOutput = (languageData:Array<LangBytePair>) => {
  let output = '';
  languageData.map(([lang, bytes]) => {
    output += `* ${bytes}: ${lang}
`
  });
  return output;
}
