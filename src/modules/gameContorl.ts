import Snake from './snake'
import Score from './scoreSpan'
import Food from './food'

class gameContorl {
    snake: Snake;
    score: Score;
    food: Food;
    direction: string = ''
    isLive: boolean = true
    constructor () {
        this.snake = new Snake()
        this.score = new Score()
        this.food = new Food()
    }

    init () {
        document.addEventListener('keydown', this.handleKeyDown.bind(this))
        this.run()
    }

    handleKeyDown(event: KeyboardEvent) {
        this.direction = event.key
    }

    run () {
        let x = this.snake.X
        let y = this.snake.Y
        switch (this.direction) {
            case 'ArrowUp':
                y -=10
            break;
            case 'ArrowDown':
                y +=10
            break;
            case 'ArrowLeft':
                x -= 10
            break;
            case 'ArrowRight':
                x += 10
            break;
        }
        this.checkEat(x,y)
        try {
            this.snake.X = x
            this.snake.Y = y
        } catch (e) {
            alert(e + 'game over')
            this.isLive = false
        }
        this.isLive && setTimeout(() => {
            this.run()
        }, 300 - (this.score.level - 1) * 30 );
    }

    checkEat(x:number, y:number) {
        if (this.food.X === x && this.food.Y === y) {
            this.score.changeScore()
            this.food.change()
            this.snake.addBody()
        }
    }
}

export default gameContorl