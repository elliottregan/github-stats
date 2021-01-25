
import { mergeLanguages, sortLanguages, formatLanguageOutput } from "../../src/dataSvc";

type LangBytePair = [string, number];

const repoLanguages = [
  {
    "JavaScript": 1,
    "Python": 23,
  },
  {
    "JavaScript": 1,
  }
];

const mergedLangs:Array<LangBytePair> = [
  ["JavaScript", 2],
  ["Python", 23],
];

const sortedMergedLangs:Array<LangBytePair> = [
  ["Python", 23],
  ["JavaScript", 2],
];

describe("mergeLanguages", function () {
  it("sums merges an array of objects into one", () => {
    expect(mergeLanguages(repoLanguages)).toStrictEqual(mergedLangs);
  });
});

describe("sortLanguages", function() {
  it('sorts an array of languages by values', () => {
    const sortedLang = sortLanguages(mergedLangs);
    expect(sortedLang).toStrictEqual(sortedMergedLangs);
  })
})

describe("formatLanguageOutput", function() {

  const output = 
`* 23: Python
* 2: JavaScript
`;

  it('sorts an array of languages by values', () => {
    const sortedLang = formatLanguageOutput(sortedMergedLangs);
    expect(sortedLang).toStrictEqual(output);
  })
})