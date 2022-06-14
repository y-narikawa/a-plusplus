//---------------  STEP2  -------------------------/////

// -- image preview -- //

function previewImage(obj) {
    let fileReader = new FileReader()

    fileReader.onload = (function () {
        document.getElementById('preview').src = fileReader.result
    })
    fileReader.readAsDataURL(obj.files[0])
}

// -- ADD FORM --//
const experience_forms = Array('start-month', 'end-month', 'total-month', 'job-title', 'employment', 'detail')
const education_forms = Array('begin-month', 'last-month', 'graduate', 'n-graduate', 'school', 'subject', 'degree')
// Experience

function addExperienceForm() {
    const experience = document.querySelector('.experience-contents-area')

    const clone = experience.cloneNode(true)

    const input_data = clone.querySelectorAll('.experience-form')

    input_data.forEach((select) => {
        select.value = ''
    })

    const icon = clone.querySelector('.delete-icon')
    icon.setAttribute('class', `delete-icon`)

    const parent = document.getElementById('experience-contents')
    parent.appendChild(clone)

    let clone_input_data = null
    experience_forms.forEach((form) => {
        clone_inputs_data = document.querySelectorAll(`.${form}`)

        clone_inputs_data.forEach((input, i) => {
            input.setAttribute('id', `${form}-${i}`)
            re_form = form.replace('-', '_')
            input.setAttribute('name', `${re_form}[${i}]`)

            input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `${form}-${i}`)

        })
    })

}

function deleteExperienceForm(p) {
    const parent = document.getElementById('experience-contents')

    const s_data = p.parentElement

    const a_data = s_data.parentElement

    parent.removeChild(a_data)

    let clone_input_data = null
    experience_forms.forEach((form) => {
        clone_inputs_data = document.querySelectorAll(`.${form}`)

        clone_inputs_data.forEach((input, i) => {
            input.setAttribute('id', `${form}-${i}`)

            re_form = form.replace('-', '_')
            input.setAttribute('for', `${re_form}[${i}]`)
            input.setAttribute('name', `${re_form}[${i}]`)
        })
    })

}

// Education

function addEducationForm() {
    const education = document.querySelector('.education-contents-area')

    const clone = education.cloneNode(true)

    const icon = clone.querySelector('.delete-icon')
    icon.setAttribute('class', `delete-icon`)

    const input_data = clone.querySelectorAll('.education-form')

    input_data.forEach((select) => {
        select.value = ''
    })
    // appendchild
    const parent = document.getElementById('education-contents')
    parent.appendChild(clone)

    // if (document.getElementById('graduate-0').checked) {
    //     document.getElementById('graduate-0').checked = true
    // } else {
    //     document.getElementById('n-graduate-0').checked
    // }

    let clone_input_data = null
    education_forms.forEach((form) => {
        clone_input_data = document.querySelectorAll(`.${form}`)

        // // console.log(clone.querySelector(`.${form}`))
        // if (form !== 'graduate' && form !== 'n-graduate') {
        //     clone.querySelector(`.${form}`).value = ''
        // } else {
        //     clone.querySelector(`.${form}`).checked = false

        // }

        clone_input_data.forEach((input, i) => {
            input.setAttribute('id', `${form}-${i}`)

            re_form = form.replace('-', '_')
            replace_form = form.replace('n-graduate', 'graduate')
            input.setAttribute('name', `${replace_form}[${i}]`)

            input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `${form}-${i}`)

        })
    })
}

function deleteEducationForm(p) {
    const parent = document.getElementById('education-contents')

    const s_data = p.parentElement

    const a_data = s_data.parentElement

    parent.removeChild(a_data)

    let clone_input_data = null
    education_forms.forEach((form) => {
        clone_input_data = document.querySelectorAll(`.${form}`)

        clone_input_data.forEach((input, i) => {
            input.setAttribute('id', `${form}-${i}`)

            re_form = form.replace('-', '_')
            replace_form = form.replace('n-graduate', 'graduate')
            input.setAttribute('name', `${replace_form}[${i}]`)

            input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `${form}-${i}`)

        })
    })

}

// License 

function addLicenseForm() {
    const license = document.querySelector('.license-contents-area')

    const clone = license.cloneNode(true)

    const input_data = clone.querySelector('.license-form')
    input_data.value = ''


    const icon = clone.querySelector('.delete-icon')
    icon.setAttribute('class', `delete-icon`)

    const parent = document.getElementById('license-contents')
    parent.appendChild(clone)

    const inputs_data = document.querySelectorAll('.license-form')
    inputs_data.forEach((input, i) => {
        input.setAttribute('name', `license[${i}]`)
        input.setAttribute('id', `license-${i}`)
    })

}

function deleteLicenseForm(p) {
    const parent = document.getElementById('license-contents')

    const s_data = p.parentElement

    const a_data = s_data.parentElement

    parent.removeChild(a_data)

    const inputs_data = document.querySelectorAll('.license-form')

    inputs_data.forEach((input, i) => {
        input.setAttribute('name', `license[${i}]`)
        input.setAttribute('id', `license-${i}`)
    })
}

