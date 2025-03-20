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

### DemoVideo
[video](https://vimeo.com/1067726924?share=copy#t=0)