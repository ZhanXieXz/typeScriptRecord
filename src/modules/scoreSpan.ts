class scoreSpan {
    scoreEl: HTMLElement
    levelEl: HTMLElement
    maxLevel: number

    score = 0
    level = 1
    constructor(maxLevel: number = 10) {
        this.scoreEl = document.getElementById('score') as HTMLElement
        this.levelEl = document.getElementById('level') as HTMLElement
        this.maxLevel = maxLevel
    }

    changeScore () {
            this.scoreEl.innerText = ++this.score + ''
            this.changeLevel()
    }

    changeLevel () {
        if (this.score > 0 && this.score % 10 === 0 && this.level < this.maxLevel) {
            this.levelEl.innerText = ++this.level + ''
        }
    }

    test() {
        for (let i = 0; i < 200; i++) {
            this.score++
            this.changeScore()        
        }
    }
}

export default scoreSpan