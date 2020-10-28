const $lis = document.querySelectorAll("ul li")
$lis.forEach(node => {
    node.addEventListener('mousedown', function (event) {
        // event.preventDefault()
        const value = node.innerText.trim()
        const $result = document.querySelector(".results")
        // $result.innerText= value
        const resultText = $result.innerText.trim()

        if (resultText == '0' || resultText == 'Infinity' || resultText == 'undefined') {
            $result.innerText = ''

        }

        if (value == '=') {
            let solution = eval(resultText)
            $result.innerText = solution
            return true

        }

        if (value.toLowerCase() == 'c') {
            $result.innerText = ''
            return true
        }


        $result.append(value)
    })
});