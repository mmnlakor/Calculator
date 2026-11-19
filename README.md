# CGPA Calculator

Browser-based CGPA calculator for Nigerian polytechnic students (5-point scale by default).
Enter course units and scores per semester; grades, GPA and CGPA update live.
Data is saved only in the visitor's own browser (localStorage). Nothing is sent to a server.

## Run locally
    node server.js
Then open http://localhost:3000

## Deploy to GitHub + Railway
1. `git init && git add . && git commit -m "CGPA calculator"`
2. Create an empty repo on GitHub, then:
   `git remote add origin <your-repo-url> && git branch -M main && git push -u origin main`
3. On railway.com: New Project > Deploy from GitHub repo > select the repo.
4. Open the service > Settings > Networking > Generate Domain.
Railway detects Node.js from package.json and runs `npm start`.

## Change the grading scale
Users can edit the grade table and class bands inside the app (Grading scale section).
To change the defaults for everyone, edit `DEFAULT_GRADES` and `DEFAULT_BANDS` in index.html.
