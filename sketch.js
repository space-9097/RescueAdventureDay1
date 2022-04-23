var food
var fuel
var water
var peopleGroup
var person1img, person2img, person3img, person4img, person5img
var peopleCount = 0
var racetrack, racetrackimg
var car, carimg
var boundaryLeft, boundaryRight

function preload() {
  racetrackimg = loadImage('Background-overlay.gif')
  carimg = loadImage('Car.gif')
  person1img = loadImage('Person1.gif')
  person2img = loadImage('Person2.gif')
  person3img = loadImage('Person3.gif')
  person4img = loadImage('Person4.gif')
  person5img = loadImage('Person5.gif')

}

function setup() {
  //background
  createCanvas(800, 800);
  racetrack = createSprite(400, 400)
  racetrack.addImage(racetrackimg)
  racetrack.scale = 3
  racetrack.velocityY = 3
  boundaryLeft = createSprite(40, 400, 20, 800)
  boundaryLeft.visible = false
  boundaryRight = createSprite(760, 400, 20, 800)
  boundaryRight.visible = false

  //car
  car = createSprite(400, 700)
  car.addImage(carimg)
  car.scale = 0.25

  //peopleGroup 
  peopleGroup=new Group ()


}

function draw() {
  //scrolling background
  background(51);
  if (racetrack.y > 600) {
    racetrack.y = 400
  }

  //car controls
  if (keyDown(LEFT_ARROW)) {
    car.x = car.x - 5
  }
  if (keyDown(RIGHT_ARROW)) {
    car.x = car.x + 5
  }

  //peoplecollidewithcar
  if (peopleGroup.isTouching(car)) {
    peopleCount+=1
    peopleGroup.destroyEach()
  }
  //car boundary collisions
  car.collide(boundaryLeft)
  car.collide(boundaryRight)
  spawnPeople()

  drawSprites();
  textSize(20)
  fill("white")
  text("People Count:"+peopleCount,80,50)

}

//People Group
function spawnPeople() {
  if (frameCount % 200 === 0) {
    var people = createSprite(Math.round(random(60, 740)), -10, 25, 25)
    var r = Math.round(random(1, 5))
    switch (r) {
      case 1:
        people.addImage(person1img)
        break;
      case 2:
        people.addImage(person2img)
        break;
      case 3:
        people.addImage(person3img)
        break;
      case 4:
        people.addImage(person4img)
        break;
      case 5:
        people.addImage(person5img)
        break;
      default:
        break;
    }
    people.scale=0.15
    people.velocityY = 5
    people.lifetime=170
    peopleGroup.add(people)
  }
}

