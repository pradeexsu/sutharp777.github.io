welcome = document.querySelector("#welcome")

const texts = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ': )']
const number_of_particle = 12
html = ''
for (let i = 0; i < texts.length; i++)
  html+=`<div class="background background${i}"></div>`

  frame=''
  text=''
  for (let i = 0; i < texts.length; i++)
  text+=`<div class="text text${i}">${texts[i]}</div>`
  for (let i = 0; i < texts.length; i++)
  frame+=`<div class="frame frame${i}"></div>`

  particle=''
  for (let i = 0; i < texts.length; i++)
    for (let j = 0; j < number_of_particle; j++)
    particle += `<div class="particle particle${i+j}"></div>`

html += `<div class="criterion">${text}${frame}${particle}</div>`

welcome.innerHTML = html
