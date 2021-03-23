const directions = document.getElementsByName('direction')
const justifyContents = document.getElementsByName('justifyContent')
const heights = document.getElementsByName('height')
const widths = document.getElementsByName('width')

const tryJustifyBoxes = document.getElementById('try-justify-boxes');
const tryJustifyBox = document.querySelectorAll('.box.try-justify-box')


directions.forEach(direction => {
  direction.addEventListener('change', function(event) {
    console.log(event.target.value)
    tryJustifyBoxes.style.flexDirection = event.target.value;
  })
})

justifyContents.forEach(justifyContent => {
  justifyContent.addEventListener('change', function(event) {
    tryJustifyBoxes.style.justifyContent = event.target.value;
  })
})

heights.forEach(height => {
  height.addEventListener('change', function(event) {
    tryJustifyBox.forEach(box => {
      box.style.height = event.target.value;
    })
    
  })
})

widths.forEach(width => {
  width.addEventListener('change', function(event) {
    tryJustifyBox.forEach(box => {
      box.style.width = event.target.value;
    })
  })
})

