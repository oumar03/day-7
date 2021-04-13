let msg = "Hello World"
let mySprite = sprites.create(assets.image`Smiley Face`, SpriteKind.Player)
scene.setBackgroundColor(8)
mySprite.say(msg, 2000)
console.log("Hello console")
