# (☝ ՞ਊ ՞)☝ Message in a Bottle

A simple full-stack web app that lets users send anonymous "messages in a bottle" to a public feed — powered entirely by **AWS serverless services**.


<div style="pointer-events: none;">
<img width="234" alt="Screenshot 2024-04-24 at 2 04 39 PM"  src="https://github.com/user-attachments/assets/d9886d60-fb06-4ef9-a0a2-f85eec7d998c"/>



</div>

## 🚀 Project Purpose

This project was built as a **learning tool and portfolio piece** to demonstrate practical use of:

- 🧠 **AWS Lambda** – Serverless backend functions (Node.js)
- 🔗 **API Gateway** – Secure RESTful API endpoints
- 📦 **DynamoDB** – NoSQL database to store messages
- 🔍 **CloudWatch** – Logging and error tracking
- 🌐 **HTML/CSS/JavaScript** – Simple frontend for sending and viewing messages

The app serves as a lightweight example of building and deploying backend logic using the **AWS Console**, without any frameworks or external services.

---

## 🛠️ Technologies Used

| Layer         | Tech                    |
|---------------|-------------------------|
| Frontend      | HTML, CSS, Vanilla JS   |
| Backend       | AWS Lambda (Node.js 22.x) |
| API Layer     | AWS API Gateway         |
| Database      | AWS DynamoDB            |
| Logging       | AWS CloudWatch Logs     |
| Hosting       | `http-server` (local dev) |

---

## ⚠️ Node.js 22 Note – Lambda Zip Fix

Since **Node.js 22.x does not include the `aws-sdk` by default**, the Lambda function requires a local `node_modules` folder zipped together with the function code.

### Steps:

1. Run `npm install aws-sdk` in your Lambda project folder.
2. Zip the contents **(not the folder itself)** — include:
    - `index.js` (or your handler file)
    - `node_modules/`
    - `package.json` (optional, but good practice)
3. Upload the `.zip` to AWS Lambda via the console.

---

## 📷 App Features

- 🌊 Users can anonymously send a message
- 🧾 Messages are stored in DynamoDB
- 🔁 All messages are retrievable via a simple GET request
- ⚙️ Fully serverless backend (no EC2, no traditional hosting)

---

## 📂 Project Structure

```bash
message-in-a-bottle/
├── index.html          # Frontend UI
├── style.css           # Basic styling
├── script.js           # API calls and interactivity
├── package.json        # Includes http-server script
├── node_modules/       # Local server (dev only)
└── README.md           # You're here
