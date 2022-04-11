input.onButtonPressed(Button.A, function () {
    Sprite.turn(Direction.Left, 180)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            Sprite.move(1)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(4, 0)
