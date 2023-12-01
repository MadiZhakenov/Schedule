
let formContainer = document.getElementById('formContainer');
let addButton = document.getElementById('addButton');
function showForm() {
        formContainer.style.display = 'block';
        addButton.innerHTML = '✕'; // Change button content to '✕'
        addButton.style.backgroundColor = '#FF3131';
        addButton.style.color = 'white';
        addButton.onclick = hideForm; // Set the click event to hideForm
    }

    function hideForm() {
        formContainer.style.display = 'none';
        addButton.innerHTML = '+'; // Change button content back to '+'
        addButton.style.backgroundColor = '#04e726';
        addButton.style.color = 'white';
        addButton.onclick = showForm; // Set the click event back to showForm
    }

    // Update the addSchedule function
// function addSchedule() {
//     const day = document.getElementById('day').value;
//     const cabinet = document.getElementById('cabinet').value;
//     const subject = document.getElementById('subject').value;
//     const type = document.getElementById('type').value;
//     const teacher = document.getElementById('teacher').value;
//     const startTime = document.getElementById('startTime').value;
//     const endTime = document.getElementById('endTime').value;
//     // Get the selected color from the dropdown
//     const selectedColor = document.getElementById('color').value;

//     // Determine background color based on type (lecture or practice)
//     const backgroundColor = type === 'practice' ? '#FF3131' : '#04e726';

//     // Create the scheduleItem container
//     const scheduleItem = document.createElement('div');
//     scheduleItem.className = 'schedule-item';
//     scheduleItem.style.backgroundColor = `${selectedColor}75`;// Set the background color here

    
//     // Create nested elements for different sections
//     const typeBadge = document.createElement('div');
//     typeBadge.textContent = type.toUpperCase()[0];
//     typeBadge.className = 'type-badge';
//     typeBadge.style.backgroundColor = backgroundColor; // Set the background color here
//     scheduleItem.appendChild(typeBadge);

//     const cabinetElement = document.createElement('p');
//     cabinetElement.textContent = cabinet;
//     cabinetElement.style.textAlign = 'left'; // Align to the left
//     cabinetElement.style.margin = '0';
//     scheduleItem.appendChild(cabinetElement);

//     const subjectElement = document.createElement('p');
//     subjectElement.innerHTML = `<b>${subject}</b>`;
//     subjectElement.style.textAlign = 'left'; // Align to the left
//     subjectElement.style.margin = '0';
//     scheduleItem.appendChild(subjectElement);

//     // Create a container for teacher and time
//     const teacherTimeContainer = document.createElement('div');
//     teacherTimeContainer.className = 'teacher-time';

//     const teacherElement = document.createElement('p');
//     teacherElement.textContent = teacher;
//     teacherElement.style.textAlign = 'left'; // Align to the left
//     teacherElement.style.margin = '0';
//     teacherTimeContainer.appendChild(teacherElement);

//     const timeElement = document.createElement('p');
//     timeElement.textContent = `${startTime}-${endTime}`;
//     timeElement.style.textAlign = 'right'; // Align to the right
//     timeElement.style.margin = '0';
//     teacherTimeContainer.appendChild(timeElement);

//     scheduleItem.appendChild(teacherTimeContainer);

//     // Append the scheduleItem to the day container
//     document.getElementById(day).appendChild(scheduleItem);

//     // Hide the form after adding the schedule
//     hideForm();
// }
function addSchedule() {
    const day = document.getElementById('day').value;
    const cabinet = document.getElementById('cabinet').value;
    const subject = document.getElementById('subject').value;
    const type = document.getElementById('type').value;
    const teacher = document.getElementById('teacher').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    // Get the selected color from the dropdown
    const selectedColor = document.getElementById('color').value;

    // Determine background color based on type (lecture or practice)
    const backgroundColor = type === 'practice' ? '#FF3131' : '#04e726';

    // Create the scheduleItem container
    const scheduleItem = document.createElement('div');
    scheduleItem.className = 'schedule-item';
    scheduleItem.style.backgroundColor = `${selectedColor}75`; // Set the background color here

    // Create nested elements for different sections

    // Type Badge
    const typeBadge = document.createElement('div');
    typeBadge.textContent = type.toUpperCase()[0];
    typeBadge.className = 'type-badge';
    typeBadge.style.backgroundColor = backgroundColor; // Set the background color here
    scheduleItem.appendChild(typeBadge);

    // Cabinet
    const cabinetElement = document.createElement('p');
    cabinetElement.textContent = cabinet;
    cabinetElement.style.textAlign = 'left'; // Align to the left
    cabinetElement.style.margin = '0';
    scheduleItem.appendChild(cabinetElement);

    // Subject
    const subjectElement = document.createElement('p');
    subjectElement.innerHTML = `<b>${subject}</b>`;
    subjectElement.style.textAlign = 'left'; // Align to the left
    subjectElement.style.margin = '0';
    scheduleItem.appendChild(subjectElement);

    // Container for teacher and time
    const teacherTimeContainer = document.createElement('div');
    teacherTimeContainer.className = 'teacher-time';

    // Teacher
    const teacherElement = document.createElement('p');
    teacherElement.textContent = teacher;
    teacherElement.style.textAlign = 'left'; // Align to the left
    teacherElement.style.margin = '0';
    teacherTimeContainer.appendChild(teacherElement);

    // Time
    const timeElement = document.createElement('p');
    timeElement.textContent = `${startTime}-${endTime}`;
    timeElement.style.textAlign = 'right'; // Align to the right
    timeElement.style.margin = '0';
    teacherTimeContainer.appendChild(timeElement);

    scheduleItem.appendChild(teacherTimeContainer);

    // Append the scheduleItem to the day container
    document.getElementById(day).appendChild(scheduleItem);

    // Hide the form after adding the schedule
    hideForm();
}

