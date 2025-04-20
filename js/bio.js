function sleep(e) {
    return new Promise((s => setTimeout(s, e)))
}
const phrases = ["Spain | 18", "Staff | Management"]
  , el = document.getElementById("bio");
let sleepTime = 150
  , curPhraseIndex = 0;
const writeLoop = async () => {
    for (; ; ) {
        let e = phrases[curPhraseIndex];
        console.log(e);
        for (let s = 0; s < e.length; s++)
            el.innerText = e.substring(0, s + 1),
            await sleep(sleepTime);
        await sleep(10 * sleepTime);
        for (let s = e.length; s > 0; s--)
            el.innerText = e.substring(0, s - 1),
            await sleep(sleepTime);
        await sleep(5 * sleepTime),
        curPhraseIndex === phrases.length - 1 ? curPhraseIndex = 0 : curPhraseIndex++
    }
}
;
writeLoop()
