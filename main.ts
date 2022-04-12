input.onButtonPressed(Button.A, function () {
    Sprite.turn(Direction.Left, 180)
    for (let index = 0; index < 4; index++) {
        Sprite.move(1)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        Sprite.turn(Direction.Right, 180)
        Sprite.change(LedSpriteProperty.X, 1)
        Sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    Sprite.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        Sprite.move(1)
        basic.pause(200)
    }
    Sprite.turn(Direction.Left, 90)
    for (let index = 0; index < 4; index++) {
        Sprite.move(1)
        Sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    Sprite.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        Sprite.move(1)
        basic.pause(200)
    }
    Sprite.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        Sprite.move(1)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(4, 0)
