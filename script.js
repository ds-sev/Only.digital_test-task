/* CONSTANTS */
// set background size
const image = { width: 1920, height: 1080 }

// set buttons positions
const position = new Array()
position[0] = { x: 600, y: 302 }
position[1] = { x: 466, y: 732 }
position[2] = { x: 707, y: 502 }
position[3] = { x: 1167, y: 424 }
position[4] = { x: 1100, y: 647 }
position[5] = { x: 1126, y: 809 }
position[6] = { x: 1391, y: 244 }
position[7] = { x: 1433, y: 494 }
position[8] = { x: 1325, y: 688 }
position[9] = { x: 1612, y: 733 }

// get buttons selectors by ID
const button = new Array()
button[0] = document.getElementById('button1')
button[1] = document.getElementById('button2')
button[2] = document.getElementById('button3')
button[3] = document.getElementById('button4')
button[4] = document.getElementById('button5')
button[5] = document.getElementById('button6')
button[6] = document.getElementById('button7')
button[7] = document.getElementById('button8')
button[8] = document.getElementById('button9')
button[9] = document.getElementById('button10')

// elements
const page = document.querySelector('.page')
const buttons = page.querySelectorAll('.button')
const descriptions = document.querySelectorAll('.button__description')

/* FUNCTIONS */
// resize
document.addEventListener('DOMContentLoaded', updatePointer)
window.addEventListener('resize', updatePointer)

function updatePointer() {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  // get largest dimension increase
  const xScale = windowWidth / image.width
  const yScale = windowHeight / image.height
  let scale
  let yOffset = 0
  let xOffset = 0

  if (xScale > yScale) {
    // the image fits perfectly in x-axis, stretched in y
    scale = xScale
    yOffset = (windowHeight - (image.height * scale)) / 2
  } else {
    // the image fits perfectly in y-axis, stretched in x
    scale = yScale
    xOffset = (windowWidth - (image.width * scale)) / 2
  }

  const arrayLength = position.length

  for (let i = 0; i < arrayLength; i++) {
    button[i].style.top = `${(position[i].y) * scale + yOffset}px`
    button[i].style.left = `${(position[i].x) * scale + xOffset}px`
  }

}

// open and close description by button clicking
page.addEventListener('click', (evt) => {

  const targetButton = evt.target

  if (targetButton.classList.contains('button')) {
    buttons.forEach((button) => {
      if (button !== targetButton) {
        button.classList.remove('button_open')
      }
    })
    descriptions.forEach((container) => {
      if (container !== targetButton.querySelector('.button__description')) {
        container.classList.remove('button__description-container_open')
      }
    })
    targetButton.classList.toggle('button_open')
    targetButton.querySelector('.button__description').classList.toggle('button__description-container_open')
  }

  // close description-containers by overlay click
  if (!targetButton.closest('.button') && !targetButton.closest('.button__description')) {
    buttons.forEach((button) => {
      button.classList.remove('button_open')
    })
    descriptions.forEach((container) => {
      container.classList.remove('button__description-container_open')
    })
  }
})

