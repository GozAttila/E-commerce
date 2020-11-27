# --> E-commerce project <--

# Build with Python / Django / DRF on backend side
# and with JavaScript / React on the frontend side

# *** Backend ***

# Run the commands in the main directory
# When you list the directories, you have to see the "backend" and "frontend" directories
# I use the terminal in Vscode to run the commands

# Install virtualenv with pip (pip required)
pip install virtualenv

# Create new virtualenv
virtualenv venv

# Activate venv
# MacOS or Linux
source env/bin/activate

# Windows
.\venv\Scripts\activate

# Install backend dependencies
pip install -r requirements.txt

# Go to backend directory
cd backend

# Prepare database (if it's not working, check if you see the manage.py file in the current directory)
python manage.py makemigrations
python manage.py migrate

# Create admin (answer the questions and bypass the password with 'yes' if you give weak or problematic password)
python manage.py createsuperuser

# Run backend server
python manage.py runserver

# Visit the page 'http://127.0.0.1:8000/' to check if the backend server is running
# You should see a 'Page not found (404)' error, that is good
# Go to 'http://127.0.0.1:8000/admin/' and log in with your superuser credentials
# If you can log in, then your backend is working. 


# *** Frontend ***

# Vscode -> open a new terminal tab
# Go to frontend directory
cd frontend

# Install frontend dependencies (if it's not working, check if you see the manage.py file in the current directory)
npm install

# Run frontend server
npm start

# Visit the page 'http://local:3000/' to check if the frontend server is running

# If you reached this point without any problem, then both front- and backend server is up and running. Well done.
