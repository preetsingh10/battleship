export function readyMessageAndButton(){
    const outerDiv = document.createElement('div')
    const readyHeading = document.createElement('div')
    readyHeading.textContent = "Are you ready for battle ?"
    readyHeading.classList.add("readyHeading")
    const readyButton = document.createElement('button')
    readyButton.classList.add('readyButton')
    readyButton.textContent = 'Ready'

    outerDiv.appendChild(readyHeading)
    outerDiv.appendChild(readyButton)
    return outerDiv
}