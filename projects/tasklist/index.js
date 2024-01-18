$(document).ready(() => {
    const $buttonAdd = $('#addTask')
    const $buttonClear = $('#clearTasks')
    const $input = $('input')
    const $taskEnter = $('#task-enter ul')

    // add button event and add tasks pressing enter key
    $buttonAdd.on('click', () => {
        if($input.val() === ('')) {
            alert('Please, insert a task')
        } else {
            $taskEnter.append(`<li> ${$input.val()} <input type="checkbox" class="task-checkbox"/> </li>`)
            $input.val('')
            }
        })

        $input.keypress((e) => {
            if(e.which === 13){
                $taskEnter.append(`<li> ${$input.val()} <input type="checkbox" class="task-checkbox"/> </li>`)
                $input.val('')
            }
        })

        // Task done marker event
        $taskEnter.on('change','.task-checkbox', function() {
            if($(this).is(':checked')){
                $(this).parent()
                    .addClass('text-decoration-line-through')
            } else {
                $(this).parent()
                    .removeClass('text-decoration-line-through')
            }
        })

        // Clear tasks button
        $buttonClear.on('click', () => {
            $taskEnter.empty()
        })
    })
        
    
                   
                
