const replaceWord = word => word.replace(/(WUB)+/g, " ").trim()
console.log(replaceWord("WUBWEWUBAREWUBCHAMPIONSWUB!!!"))