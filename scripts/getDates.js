const year = new Date().getFullYear()

document.querySelector('#year').textContent = year

document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`
