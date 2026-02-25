# Experiment 1 – Handling Forms Using Controlled Components in React

## 📌 Aim

To create and handle forms in a frontend application using controlled components in React.

---

## 🧰 Software Requirements

* Node.js
* React (Vite)
* VS Code
* Web Browser

---

## 📖 Theory

Controlled components are React components in which form data is handled by the component’s state.

This means:

* React state stores input values
* Input fields update state using event handlers
* Form submission is handled through functions

This provides complete control over user input and makes form handling predictable and efficient.

---

## ⚙️ Features

✔ Controlled form inputs
✔ useState for state management
✔ Input change handling
✔ Form submission handling
✔ Live form data preview
✔ Modern responsive UI

---

## 🛠️ Installation and Setup

### Step 1 – Create React Project

npm create vite@latest sub-exp1 -- --template react
cd sub-exp1
npm install

### Step 2 – Run Project

npm run dev

Open browser and go to:
http://localhost:5173/

---

## 🧪 Procedure

1. Create a React application using Vite.
2. Create a form component.
3. Use useState to store input values.
4. Handle input change events.
5. Submit the form using an event handler.

---

## 📂 Folder Structure

sub-exp1
│
├── node_modules
├── public
│   └── vite.svg
│
├── src
│   ├── Student.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── assets
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

---

## 🧩 Technologies Used

* React JS
* JavaScript (ES6)
* CSS
* Vite

---

## 📸 Output

The application displays:

* User input form
* Name, Email, Age, Gender fields
* Submit button
* Live preview of entered data
* Clean card UI with gradient background

###  Screenshot
<img width="1904" height="966" alt="Screenshot 2026-02-25 095431" src="https://github.com/user-attachments/assets/3ea4e18b-b0dd-4810-8cba-796ba923f213" />


<img width="1918" height="971" alt="Screenshot 2026-02-25 095634" src="https://github.com/user-attachments/assets/c8aa9f97-3b08-47bb-8e31-294ac6596723" />


<img width="651" height="402" alt="Screenshot 2026-02-25 095934" src="https://github.com/user-attachments/assets/c8d31852-2e67-4c43-bd5d-e2a34c502d81" />







---

## 🎯 Learning Outcomes

* Understand controlled components in React
* Manage form state using useState
* Handle user input dynamically
* Implement form submission logic
* Design responsive UI forms

---

## ✅ Conclusion

This experiment demonstrates how to create and manage forms using controlled components in React. Form data is stored and controlled through component state, allowing efficient and predictable handling of user input.

---

## 👩‍💻 Author

Shivali

---

# Experiment -2📘 Student Form Validation — React + Vite

## 🎯 Aim

To create a React-based form that validates Email and Password using regular expressions.

---

## 🛠️ Tech Stack

* React JS
* Vite
* JavaScript
* CSS
* Regex Validation

---

## 🧩 Features

✔ Email validation (`@` + valid domain like .com, .in, etc.)
✔ Password validation:

* Starts with capital letter
* Contains number
* Contains special character
* Minimum 5 characters

✔ Error messages for invalid input
✔ Success alert on valid submission
✔ Auto form reset after submit
✔ Soft modern UI

---

## 🚀 Run Project

```bash
npm create vite@latest sub-exp2
cd sub-exp2
npm install
npm run dev
```

---

## 📸 Output

<img width="489" height="446" alt="image" src="https://github.com/user-attachments/assets/3caf2418-d8f2-47cd-8d49-1f6fdabf6276" />

<img width="523" height="538" alt="image" src="https://github.com/user-attachments/assets/55c4cf0f-7be7-494d-9956-eb5a01c5f40d" />


<img width="646" height="227" alt="image" src="https://github.com/user-attachments/assets/19d1e3a1-361c-4973-b800-2496c74eec21" />


---

## 🎓 Learning Outcomes

* React form handling
* useState hook
* Regex validation
* UI styling with CSS

---

## 🏁 Conclusion

This project demonstrates form validation in React using regex to ensure correct email and password format with a user-friendly interface.
