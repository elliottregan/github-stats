
import { getRepoLangSizes, getUserRepos } from "../../src/httpSvc";

describe("getRepoLangSizes", function () {
  it("sums two numbers", async () => {
    expect(await getRepoLangSizes('elliottregan', 'empty-repo')).toStrictEqual({"JavaScript": 1, "Python": 23});
  });
});