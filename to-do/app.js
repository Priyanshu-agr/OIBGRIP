window.addEventListener('load', () => {
    const form = document.querySelector('#input_form');
    const input_task = document.querySelector('#new_task');
    const add_button = document.querySelector('#add_task');
    const pending = document.querySelector('#pending_list');
    const completed = document.querySelector('#completed_list');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let input, edit, del, div;
        if (isEmpty(input_task.value)) {
            create();
            input.value = input_task.value;
            edit.innerText = 'Edit';
            del.innerText = 'Delete'
            del.id = 'delete'
            edit.id = 'edit'
            input.readOnly = true;
            div.appendChild(input);
            div.appendChild(edit);
            div.appendChild(del);
            pending.append(div);
            input_task.value = "";
            edit.addEventListener('click', () => {
                if (edit.innerText.toLowerCase() === 'edit') {
                    edit.innerText = 'Save';
                    edit.style.color = "#06d6a0"
                    input.readOnly = false;
                    input.focus();
                }
                else {
                    input.readOnly = true;
                    edit.innerText = 'Edit';
                    edit.style.color = "#4cc9f0"
                }
            })
            del.addEventListener('click', () => {
                completed.append(input);

                div.removeChild(edit);
                div.removeChild(del);
                div.removeChild(input);
            })
        }
        else {
            alert('Please enter the task!');
        }
        function create() {
            input = document.createElement('input');
            edit = document.createElement('button');
            del = document.createElement('button');
            div = document.createElement('div');
        }
        function isEmpty(str) {
            return str.trim().length;
        }
    })

})

