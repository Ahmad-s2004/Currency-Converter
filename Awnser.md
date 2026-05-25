1. How to Run
Make sure you have Node.js installed, then run these steps:

commands
git clone https://github.com/Ahmad-s2004/Currency-Converter.git
cd Currency-Converter
npm install
# Create a .env file in the root and add:
VITE_EXCHANGE_RATE_KEY=your_api_key_here
npm run dev

Open http://localhost:5173 in your brow

2. Stack Choice
Why React & Tailwind: React handles dynamic state changes instantly when switching tabs, and Tailwind CSS allows rapid modern UI styling without writing massive separate CSS files.

Worse Choice: Vanilla JS (HTML/CSS/JS). Managing real-time data fetching, 2-second background polling, and updating multiple UI views manually using DOM manipulation (document.getElementById) would make the code super messy and buggy.

3. One Real Edge Case
The Edge Case: The component closes (unmounts) while the 2-second background timer is still running.

Location: src/components/HistoryLog.jsx (Inside useEffect cleanup: return () => clearInterval(intervalId);).

Without Handling: If the user switches tabs, the timer will keep running in the browser memory forever. This causes a memory leak, which wastes browser performance and slows down the app.

4. AI Usage
I used Gemini purely for UI Design and Dashboard Ideas. I asked it for a modern, dark-themed look with glassmorphism using Tailwind CSS to make the app look premium.

What I Changed: All the logic building was done entirely by myself. The AI only suggested the visual styles, but I wrote the whole functionality, state management, local storage persistence, and the 2-second background polling logic from scratch to make sure everything works correctly.

5. Honest Gap
What isn't good enough: Right now, the 2-second background polling interval is hardcoded into the frontend (HistoryLog.jsx). It continuously hits localStorage or requests data without checking if the data has actually changed or if the user is even active on the window.

How I would fix it with another day: If I had one more day, I would implement efficient caching or a state-change listener instead of a raw setInterval. I would also add a listener to check if the browser tab is blurred (inactive) so the app pauses the 2-second timer when the user switches to another browser window. This would optimize performance and save device battery.