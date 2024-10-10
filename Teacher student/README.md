


# React Application with Dashboards and Scheduling

This project is a React-based application that includes a student dashboard, teacher dashboard, and scheduling page. It features a responsive layout with a modal login form, navigation through different dashboards, and the ability to manage scheduling within the app.

Table of Contents

Project Structure

Features

Installation

Usage

Customization

Contributing

License

src/

│
├── components/

│   ├── Header.js  
     # Navigation bar with login button

│   ├── Footer.js 
      # Footer component (you can add your content)

│   ├── Applayout.js 
   # Main layout component
│   └── Login.js   

     # Modal login component

│
├── App.js   

           # Root component

├── index.js    
        # Entry point of the application
└── assets/





## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

Responsive Layout: The Applayout component provides a responsive structure with a background image and gradient overlay.

Header Component: Contains navigation links and a login button.

Modal Login: A login form that appears in a modal overlay when the login button is clicked.

Student Dashboard: Provides students with access to their personalized dashboard, including course information and progress tracking.

Teacher Dashboard: Allows teachers to manage their classes, view student progress, and handle course content.

Scheduling Page: A dedicated page for scheduling classes, meetings, or events, accessible by both students and teachers.

React Router Integration: Uses react-router-dom for handling page routing and content rendering via the Outlet component.

## Installation

Install my-project with npm

git clone https://github.com//github.com/ayush-23-30 /
react-app-with-dashboards.git
cd react-app-with-dashboards

Install Dependencies:

Ensure you have Node.js installed, then run:

npm i 

Usage
Start the Development Server:

Run the following command to start the development server:

bash
Copy code
npm start
Access the Application:

Open your web browser and navigate to http://localhost:3000 to view the application.

Navigate to Dashboards:

Student Dashboard: Accessible through a dedicated link in the header or directly via the URL (e.g., /student-dashboard).

Teacher Dashboard: Accessible similarly via a header link or URL (e.g., /teacher-dashboard).
Scheduling Page: Can be accessed by both students and teachers to manage schedules (e.g., /schedule).

Trigger the Login Modal:

Click the "Login" button in the header to display the login modal.

Customization
Changing the Background Image

To change the background image:


Replace teacher.jpg in the src/assets folder with your desired image.


Update the import statement in Applayout.js:

# Modifying the Dashboards
To customize the student or teacher dashboards:

Open StudentDashboard.js or TeacherDashboard.js.

Modify the layout, add or remove components, and adjust the styling as needed.

Customizing the Scheduling Page
To customize the scheduling page:

Open SchedulingPage.js.

Modify the scheduling features, input fields, and logic according to your requirements.

Contributing

Contributions are welcome! If you have suggestions for improving this project, feel free to open an issue or submit a pull request.


License
This project is licensed under the MIT License. See the LICENSE file for more details.


#some photos from the App- 



![Screenshot 2024-08-23 234830](https://github.com/user-attachments/assets/177556df-8403-4fa2-86a5-ff1841975a5d)

![Screenshot 2024-08-23 234950](https://github.com/user-attachments/assets/0c8f7957-41d1-4885-96d3-04c1164e4878)
![Screenshot 2024-08-23 234721](https://github.com/user-attachments/assets/7b20f95b-0d95-47fd-94f6-34bab9845aca)

![Screenshot 2024-08-23 235736](https://github.com/user-attachments/assets/e54ac054-23f8-46c9-8e34-b2b5904a71fc)




    
