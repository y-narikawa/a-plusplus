//step1
//step2

function previewImage(obj) {
    let fileReader = new FileReader()

    fileReader.onload = (function () {
        document.getElementById('preview').src = fileReader.result
    })
    fileReader.readAsDataURL(obj.files[0])
}

//add more input

function addForm() {
    let i = 1
    let input_data = document.createElement('input')
    input_data.type = 'text'
    input_data.id = 'inputform_' + i
    let parent = document.getElementById('form_area')
    parent.appendChild(input_data)

    let button_data = document.createElement('button')
    button_data.id = i
    button_data.onclick = function () {
        deleteBtn(this)
    }
    button_data.innerHTML = '<div class="delete-icon">削除</div> '
    parent.appendChild(button_data)
    i++
}

function deleteBtn(target) {
    let target_id = target.id
    let parent = document.getElementById('form_area')
    let ipt_id = document.getElementById('inputform_' + target_id)
    let tgt_id = document.getElementById(target_id)
    parent.removeChild(ipt_id)
    parent.removeChild(tgt_id)
    console.log('m12')
}