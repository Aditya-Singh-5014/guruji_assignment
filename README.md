# Multi-Step Form with React

## Overview

This project is a responsive multi-step form built using React.js. It guides users through a three-step process for collecting personal and address information, with a final step for confirmation. The form includes features such as client-side validation, error handling, navigation controls, and data persistence using local storage. The application is deployed on GitHub Pages for easy access.

## Features

- **Multi-Step Form**: The form is divided into three steps:
  - **Step 1**: Personal Information (Name, Email, Phone)
  - **Step 2**: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
  - **Step 3**: Confirmation (Review all entered data)
- **Navigation and Controls**:
  - Tabbed navigation to switch between steps.
  - Back button disabled on the first step.
  - Submit button replaces the Next button on the last step.
- **Client-Side Validation**:
  - Ensures all fields are filled before allowing navigation to the next step.
  - Displays appropriate error messages for empty or invalid fields.
  - Highlights fields with errors.
- **State Management**:
  - Uses React state with hooks (`useState`, `useEffect`) to manage form data.
  - State updates reflect user inputs and form navigation.
- **Local Storage**:
  - Persists entered data to local storage when navigating between steps.
  - Retrieves and pre-fills form fields if the user revisits the form.
- **Responsive Design**:
  - Ensures the form is responsive and works well on desktop, tablet, and mobile screens.
  - Uses CSS animations and transitions for a smooth user experience.
- **Unit Tests**:
  - Includes unit tests for critical components and validation functions using the React Testing Library.

## Technologies Used

- React.js
- React Router
- React Icons
- CSS for styling and animations
- Local Storage for data persistence
- React Testing Library for unit testing
- GitHub Pages for deployment

## Project Structure

src/
|-- components/
| |-- Navigation.jsx
| |-- Step1.jsx
| |-- Step2.jsx
| |-- Step3.jsx
| |-- tests/
| |-- MultiStepForm.test.jsx
| |-- Step1.test.jsx
| |-- Step2.test.jsx
| |-- Step3.test.jsx
|-- pages/
| |-- MultiStepForm.jsx
|-- styles/
| |-- MultiStepForm.css
|-- utils/
| |-- validation.js
|-- localStorage.js
|-- App.js
|-- index.js
|-- index.css
|-- reportWebVitals.js
|-- setupTests.js

## How to Use

1. **Clone the Repository**:

   - Clone this repository to your local machine using `git clone https://github.com/Aditya-Singh-5014/guruji_assignment.git`

2. **Navigate to the Project Directory**:

   - Change to the project directory: `cd guruji_assignment`

3. **Install Dependencies**:

   - Install the required dependencies using `npm install`

4. **Run the Application**:

   - Start the development server using `npm start`
   - Open your browser and navigate to `http://localhost:3000/guruji_assignment` to view the application.

5. **Build and Deploy**:
   - Build the project for production using `npm run build`
   - Deploy the application to GitHub Pages using `npm run deploy`

## Deployment

This application is deployed on GitHub Pages. You can access it [here](https://Aditya-Singh-5014.github.io/guruji_assignment).

## Contributions

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes appropriate tests.
