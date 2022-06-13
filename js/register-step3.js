//---------------  STEP3  -------------------------/////

// -- ADD FORM --//
// Job Category

function addJobForm() {
    const job = document.querySelector('.job-contents-area')

    const clone = job.cloneNode(true)

    const icon = clone.querySelector('.delete-icon')
    icon.setAttribute('class', `delete-icon`)

    const parent = document.getElementById('job-contents')
    parent.appendChild(clone)
    
    const clone_data = parent.querySelectorAll('.job-form-1')
    clone_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })
    
    const clone_a_data = parent.querySelectorAll('.job-form-2') 
    clone_a_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })

    const clone_b_data = parent.querySelectorAll('.job-form-3')
    clone_b_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })

    const clone_c_data = parent.querySelectorAll('.job-form-4')
    clone_c_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })

    const clone_d_data = parent.querySelectorAll('.job-form-5')
    clone_d_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })

    const clone_e_data = parent.querySelectorAll('.job-form-6')
    clone_e_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })
    
    const clone_f_data = parent.querySelectorAll('.job-form-7')
    clone_f_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-c-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-c-${i}`)
    })
    
    const clone_g_data = parent.querySelectorAll('.job-form-8') 
    clone_g_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-b-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-b-${i}`)
    })

    const clone_h_data = parent.querySelectorAll('.job-form-9')
    clone_h_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-bb-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-bb-${i}`)
    })

    const clone_i_data = parent.querySelectorAll('.job-form-10')
    clone_i_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-a-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-a-${i}`)
    })

    const clone_j_data = parent.querySelectorAll('.job-form-11')
    clone_j_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-aa-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aa-${i}`)
    })

    const clone_k_data = parent.querySelectorAll('.job-form-12')
    clone_k_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-aaa-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aaa-${i}`)
    })
    
    const clone_l_data = parent.querySelectorAll('.job-form-13')
    clone_l_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-c2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-c2-${i}`)
    })
    
    const clone_m_data = parent.querySelectorAll('.job-form-14') 
    clone_m_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-b2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-b2-${i}`)
    })

    const clone_n_data = parent.querySelectorAll('.job-form-15')
    clone_n_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-bb2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-bb2-${i}`)
    })

    const clone_o_data = parent.querySelectorAll('.job-form-16')
    clone_o_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-a2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-a2-${i}`)
    })

    const clone_p_data = parent.querySelectorAll('.job-form-17')
    clone_p_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-aa2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aa2-${i}`)
    })

    const clone_q_data = parent.querySelectorAll('.job-form-18')
    clone_q_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-aaa2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aaa2-${i}`)
    })

    const clone_r_data = parent.querySelectorAll('.job-form-19')
    clone_r_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-c3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-c3-${i}`)
    })
    
    const clone_s_data = parent.querySelectorAll('.job-form-20') 
    clone_s_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-b3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-b3-${i}`)
    })

    const clone_t_data = parent.querySelectorAll('.job-form-21')
    clone_t_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-bb3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-bb3-${i}`)
    })

    const clone_u_data = parent.querySelectorAll('.job-form-22')
    clone_u_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-a3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-a3-${i}`)
    })

    const clone_v_data = parent.querySelectorAll('.job-form-23')
    clone_v_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-aa3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aa3-${i}`)
    })

    const clone_w_data = parent.querySelectorAll('.job-form-24')
    clone_w_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-aaa3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aaa3-${i}`)
    })
}

function deleteJobForm(p) {
    const parent = document.getElementById('job-contents')

    const s_data = p.parentElement

    const a_data = s_data.parentElement

    parent.removeChild(a_data)

    const clone_data = parent.querySelectorAll('.job-form-1')
    clone_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })
    
    const clone_a_data = parent.querySelectorAll('.job-form-2') 
    clone_a_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })

    const clone_b_data = parent.querySelectorAll('.job-form-3')
    clone_b_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })

    const clone_c_data = parent.querySelectorAll('.job-form-4')
    clone_c_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })

    const clone_d_data = parent.querySelectorAll('.job-form-5')
    clone_d_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })

    const clone_e_data = parent.querySelectorAll('.job-form-6')
    clone_e_data.forEach((input, i) =>{
        input.setAttribute('name', `skill[${i}]`)
    })
    
    const clone_f_data = parent.querySelectorAll('.job-form-7')
    clone_f_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-c-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-c-${i}`)
    })
    
    const clone_g_data = parent.querySelectorAll('.job-form-8') 
    clone_g_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-b-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-b-${i}`)
    })

    const clone_h_data = parent.querySelectorAll('.job-form-9')
    clone_h_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-bb-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-bb-${i}`)
    })

    const clone_i_data = parent.querySelectorAll('.job-form-10')
    clone_i_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-a-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-a-${i}`)
    })

    const clone_j_data = parent.querySelectorAll('.job-form-11')
    clone_j_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-aa-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aa-${i}`)
    })

    const clone_k_data = parent.querySelectorAll('.job-form-12')
    clone_k_data.forEach((input, i) =>{
        input.setAttribute('name', `autocad_skill[${i}]`)
        input.setAttribute('id', `evaluation-aaa-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aaa-${i}`)
    })
    
    const clone_l_data = parent.querySelectorAll('.job-form-13')
    clone_l_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-c2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-c2-${i}`)
    })
    
    const clone_m_data = parent.querySelectorAll('.job-form-14') 
    clone_m_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-b2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-b2-${i}`)
    })

    const clone_n_data = parent.querySelectorAll('.job-form-15')
    clone_n_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-bb2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-bb2-${i}`)
    })

    const clone_o_data = parent.querySelectorAll('.job-form-16')
    clone_o_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-a2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-a2-${i}`)
    })

    const clone_p_data = parent.querySelectorAll('.job-form-17')
    clone_p_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-aa2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aa2-${i}`)
    })

    const clone_q_data = parent.querySelectorAll('.job-form-18')
    clone_q_data.forEach((input, i) =>{
        input.setAttribute('name', `drawing_[${i}]`)
        input.setAttribute('id', `evaluation-aaa2-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aaa2-${i}`)
    })

    const clone_r_data = parent.querySelectorAll('.job-form-19')
    clone_r_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-c3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-c3-${i}`)
    })
    
    const clone_s_data = parent.querySelectorAll('.job-form-20') 
    clone_s_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-b3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-b3-${i}`)
    })

    const clone_t_data = parent.querySelectorAll('.job-form-21')
    clone_t_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-bb3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-bb3-${i}`)
    })

    const clone_u_data = parent.querySelectorAll('.job-form-22')
    clone_u_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-a3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-a3-${i}`)
    })

    const clone_v_data = parent.querySelectorAll('.job-form-23')
    clone_v_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-aa3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aa3-${i}`)
    })

    const clone_w_data = parent.querySelectorAll('.job-form-24')
    clone_w_data.forEach((input, i) =>{
        input.setAttribute('name', `manage_skill[${i}]`)
        input.setAttribute('id', `evaluation-aaa3-${i}`)
        input.parentElement.getElementsByTagName('label')[0].setAttribute('for', `evaluation-aaa3-${i}`)
    })


}