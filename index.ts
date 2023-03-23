import express from 'express'
const app = express()

function generatePassword(size: number): string {
    function getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getCharList(size: number): Array<string> {
        let charList: Array<string> = []
        for (let i of new Array(size)) charList.push(String.fromCharCode(getRandomInt(33, 126)))
        return charList
    }

    let password = '', charList = getCharList(size)
    password = password.concat(charList.join(''))
    return password
}

app.listen(3000, () => console.log('Server is running on port 3000'))

app.get('/', (req, res) => {
    const password = generatePassword(20)
    res.send(password)
})