# AgentManagement-System
### About
A web application built using the MERN stack that provides an Admin and Agent dashboard for managing tasks efficiently. The Admin can create agents, upload and distribute tasks, while Agents can view their assigned tasks.
### Features
#### Admin Features
- Admin Login using JWT authentication.
- Create Agents with details like Name, Email, Mobile Number, and Password.
- Upload Excel (CSV , XLSX , XLS , ODS) Files containing tasks.
- Distribute Tasks equally among agents.
- View & Manage Agents from the dashboard.

#### Agent Features
- Login to access assigned tasks.
- View Assigned Tasks from the uploaded CSV file.
- View Profile information.

### Tech Stack
- Frontend: React.js(Next.Js), Tailwind CSS , DaisyUi
- Backend: Node.js, Express.js
- Database: MongoDB

### Installation & Setup
- git clone ```repo-url```

### Install Dependencies
- Frontend
```
cd client 
npm install
``` 
- Backend
```
cd server 
npm install
```


### Setup Environment Variables
follow the env.example file to setup .env

### Run the Application
- Frontend
```
cd client 
npm run dev
``` 
- Backend
```
cd server 
node index.js
```

### How It Works
- Admin enters email & password.
- If authenticated, JWT token is generated.
- Redirected to Admin Dashboard.
1) Adding Agents
- Admin can create agents with basic details.
- Credentials are stored securely in the database.
2) Upload & Distribute Tasks
- Admin uploads a CSV file.
- The system validates the file format.
- Tasks are evenly distributed among agents.
- Agents can then view assigned tasks.
3) Agent Dashboard
- Agents log in to their accounts.
- They can view their assigned tasks.
- They can update their profile.

### Default Credentials
Email: admin@email.com
Password: admin123
Note: You can change the admin credentials by modifying the DbConnection file in the server folder. 

### DemoVideo
[video](https://vimeo.com/1067726924?share=copy#t=0)

### ScreenShots
![Screenshot 2025-03-20 183235](https://github.com/user-attachments/assets/65e91b2a-6ee6-4c73-a424-4b4872d60279)
![Screenshot 2025-03-20 183159](https://github.com/user-attachments/assets/a2374bb5-5e23-41a0-8fb6-5e623de5b27a)
![Screenshot 2025-03-20 183142](https://github.com/user-attachments/assets/bdedc00c-232a-42ea-90dc-f1b2ab1c4d0f)
![Screenshot 2025-03-20 183115](https://github.com/user-attachments/assets/65e2f93b-e4eb-4cfc-b7dc-0297a359062e)
![Screenshot 2025-03-20 183052](https://github.com/user-attachments/assets/22742479-a74d-4dfe-911e-e7040d36fb7f)
![Screenshot 2025-03-20 183031](https://github.com/user-attachments/assets/1e34290a-e600-4de9-8b3b-07954d14a352)
![Screenshot 2025-03-20 183011](https://github.com/user-attachments/assets/622d97d2-21e8-4843-9108-c62085328d8f)
![Screenshot 2025-03-20 182947](https://github.com/user-attachments/assets/d974c1d3-bf74-48f6-9e0c-57797f3cd366)
