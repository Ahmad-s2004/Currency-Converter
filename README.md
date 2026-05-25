# Currency Converter Dashboard
A simple and clean web application to convert global currencies in real-time. It uses live exchange rates and saves your recent conversions so you don't lose them when you refresh the page.

# Features
* **Real-Time Conversion:** Converts between 10 major global currencies using up-to-date market rates.
* **Live Parity Matrix:** A clean table showing how different currencies compare against the USD.
* **Persistent History Log:** Keeps track of your last 5 swaps using local browser storage.
* **Auto-Refresh:** Automatically updates your data in the background every 2 seconds.

# How to Run the Project Locally

Follow these quick steps to get the app running on your computer:

1. Clone the Repository
Open your terminal and run this command to copy the project to your computer:
git clone [https://github.com/Ahmad-s2004/Currency-Converter.git](https

2. Move into the Project Directory
cd Currency-Converter

3. Install Dependencies
Install all the required packages for the project by running:
npm install

4. Setup Environment Variables
Go to ExchangeRate-API and get your free API key.
Create a new file named .env in the root folder of your project.
Add your API key inside the .env file like this:
VITE_EXCHANGE_RATE_KEY=your_actual_api_key_here

5. Start the Project
Now, start the local development server:
npm run dev
Once the terminal says it's running, open your browser and go to http://localhost:5173.