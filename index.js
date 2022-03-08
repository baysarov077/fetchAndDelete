const url = `https://reqres.in/api/users`
async function render() {
    try {
        let res = await fetch(url)
        let object = await res.json()
        console.log(object)
    for(let i = 0; i < object.data.length; i++){
        const table = document.getElementById('table')
        const name = document.createElement('th').textContent = object.data[i].first_name
        const lastName = document.createElement('th').textContent = object.data[i].last_name
        const email = document.createElement('th').textContent = object.data[i].email
        const images = document.createElement('th')
        const icons = document.createElement('img')
        const mainRow = document.createElement('tr')
        const delBtn = document.createElement('button')
        const br = document.createElement('br')
        delBtn.textContent = 'X'
        delBtn.addEventListener('click', (e) => {
            mainRow.remove(e.target)
            remove(e.target)
            console.log(object.data)
        })
        icons.src = object.data[i].avatar
        mainRow.className ='mainRow'
        table.append(mainRow)
        images.append(icons)
        mainRow.append(`name: ${name} ${lastName}` ,br , 'email:' + email, images)
        mainRow.append(delBtn)
    }
    function remove(i) {
        object.data.splice(i, 1)
    }
    } catch (err) {
        const table = document.getElementById('table')
        table.style.display = 'none'
        const errBlock = document.createElement('div')
        errBlock.textContent = err + 'Возникла ошибка'
        const contant = document.getElementById('contant')
        contant.append(errBlock)
    }
}
render()