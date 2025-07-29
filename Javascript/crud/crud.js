document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("loginSection");
    const crudSection = document.getElementById("crudSection");
    const loginForm = document.getElementById("loginForm");
    const logoutBtn = document.getElementById("logoutBtn");
    const studentForm = document.getElementById("studentForm");
    const studentList = document.getElementById("studentList");
  
    const studentName = document.getElementById("studentName");
    const rollNo = document.getElementById("rollNo");
    const department = document.getElementById("department");
    const cgpa = document.getElementById("cgpa");
    const gender=document.getElementById("gender")
    const studentIndex = document.getElementById("studentIndex");
  
    
    function checkLogin() {
      if (sessionStorage.getItem("loggedInUser")) {
        loginSection.style.display = "none";
        crudSection.style.display = "block";
        loadStudents();
      } else {
        loginSection.style.display = "block";
        crudSection.style.display = "none";
      }
    }
  
    // Login Form
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username === "Annamalai" && password === "123") {
        sessionStorage.setItem("loggedInUser", username);
        checkLogin();
      } else {
        alert("Invalid Username");
      }
    });
  
    // Logout
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("loggedInUser");
      checkLogin();
    });
  
    // session storage load he student data
    function loadStudents() {
      studentList.innerHTML = "";
      const students = JSON.parse(sessionStorage.getItem("students")) || [];
  
      students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.rollNo}</td>
          <td>${student.department}</td>
          <td>${student.cgpa}</td>
          <td>${student.gender}</td>
          <td>
            <button class="btn btn-warning btn-sm" onclick="editStudent(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
          </td>
        `;
        studentList.appendChild(row);
      });
    }
  
    // Add student
    studentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const students = JSON.parse(sessionStorage.getItem("students")) || [];
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const student = {
         name: studentName.value, 
         rollNo: rollNo.value, 
         department: department.value, 
         cgpa: cgpa.value, gender
         };
  
      if (studentIndex.value === "") {
        students.push(student);
      } 
      else {
        students[studentIndex.value] = student;
        studentIndex.value = "";
      }
  
      sessionStorage.setItem("students", JSON.stringify(students));
      studentForm.reset();
      loadStudents();
    });

  
    //Update Student data:
    window.editStudent = (index) => {
      const students = JSON.parse(sessionStorage.getItem("students"));
      const student = students[index];
      studentName.value = student.name;
      rollNo.value = student.rollNo;
      department.value = student.department;
      cgpa.value = student.cgpa;
      studentIndex.value = index;
    };
    //Remove Element
    window.deleteStudent=(index)=>{
      const student=JSON.parse(sessionStorage.getItem("students"));
      student.splice(index,1); //slice remove the element in an array start and end Ex:Dinesh-start D ending-s-Dines
      sessionStorage.setItem("students",JSON.stringify("students"));
      loadStudents();

    };
  
    
  
    checkLogin();
  });
  