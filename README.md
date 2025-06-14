📁 File Management Tool
A simple Node.js application using core modules like fs, path, and http to create, read, and delete files through HTTP requests.

🚀 Features
📄 Create a File via HTTP POST request

📖 Read a File via HTTP GET request

🗑️ Delete a File via HTTP DELETE request

🔧 Built with only Node.js core modules

📦 Requirements
Node.js (v14 or higher)

Git Bash or terminal with curl (for testing)

📂 Project Structure
pgsql
Copy
Edit
file-management-tool/
├── files/               # Folder where all created files are stored
├── server.js            # Main server file
├── .gitignore
└── README.md
🔧 Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/jatin-k-agarwal/file-management-tool.git
cd file-management-tool
Run the server:

bash
Copy
Edit
node server.js
You should see:

arduino
Copy
Edit
🚀 Server is running at http://localhost:3000
📬 API Endpoints
Method	Endpoint	Description
POST	/create?filename=test.txt&content=hello	Create a file named test.txt
GET	/read?filename=test.txt	Read contents of test.txt
DELETE	/delete?filename=test.txt	Delete test.txt

💡 Examples (using curl)
bash
Copy
Edit
# Create
curl.exe -X POST "http://localhost:3000/create?filename=note.txt&content=This%20is%20a%20test%20note"

# Read
curl "http://localhost:3000/read?filename=note.txt"

# Delete
curl.exe -X DELETE "http://localhost:3000/delete?filename=note.txt"
⚠️ Notes
All files are stored in the /files folder.

This app uses only built-in modules, no external dependencies.

Do not upload files/ or node_modules/ to GitHub — they are in .gitignore.

🧑‍💻 Author
Jatin Agarwal
GitHub Profile →

🏷️ License
MIT – Free to use and modify.

