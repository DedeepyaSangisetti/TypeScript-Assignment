const studentForm = document.getElementById("studentForm");
const studentId = document.getElementById("studentId");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");
const studentTableBody = document.getElementById("studentTableBody");
const submitButton = document.getElementById("submitButton");

// Load students when page opens
loadStudents();

// READ
async function loadStudents() {
    const response = await fetch("/api/students");
    const students = await response.json();

    studentTableBody.innerHTML = "";

    students.forEach((student) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>
                <button class="edit-btn"
                    onclick='editStudent(${JSON.stringify(student)})'>
                    Edit
                </button>

                <button
                    onclick="deleteStudent('${student._id}')">
                    Delete
                </button>
            </td>
        `;

        studentTableBody.appendChild(row);
    });
}

// CREATE / UPDATE
studentForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const studentData = {
        name: nameInput.value,
        age: Number(ageInput.value),
        course: courseInput.value
    };

    let url = "/api/students";
    let method = "POST";

    // UPDATE
    if (studentId.value) {
        url = `/api/students/${studentId.value}`;
        method = "PUT";
    }

    await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(studentData)
    });

    resetForm();
    loadStudents();
});

// EDIT
function editStudent(student) {
    studentId.value = student._id;
    nameInput.value = student.name;
    ageInput.value = student.age;
    courseInput.value = student.course;

    submitButton.textContent = "Update Student";
}

// DELETE
async function deleteStudent(id) {
    await fetch(`/api/students/${id}`, {
        method: "DELETE"
    });

    loadStudents();
}

// Reset form
function resetForm() {
    studentId.value = "";
    nameInput.value = "";
    ageInput.value = "";
    courseInput.value = "";

    submitButton.textContent = "Add Student";
}