# Harshit Agrawal - Research & Academic Portfolio

This repository contains the source code for the academic and research portfolio website of **Harshit Agrawal** (New Media Artist & AI/HCI Researcher, MIT Media Lab alumnus).

Live art portfolio: [harshitagrawal.com](https://harshitagrawal.com)

---

## 🚀 How to Host on GitHub Pages

You can host this website on GitHub Pages in two simple ways:

### Option A: User/Organization Page (`username.github.io`)
If your GitHub username is e.g. `harshitagrawal`:
1. Create a new GitHub repository named: **`harshitagrawal.github.io`** (replace with your actual GitHub username).
2. Push this repository's files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of research website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. GitHub Pages will automatically publish the site live at `https://<your-username>.github.io`.

### Option B: Project Page (e.g. `github.com/username/research`)
1. Create a new GitHub repository (e.g., `research` or `academic`).
2. Push your files to the `main` branch.
3. In the repository on GitHub, go to **Settings** > **Pages** (under Code and automation).
4. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
5. Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
6. Your site will be published at `https://<your-username>.github.io/<repository-name>/`.

---

## 📂 Site Structure

```
.
├── index.html                  # Main homepage containing all sections
├── assets/
│   ├── css/
│   │   └── style.css           # Modern academic stylesheet (light/dark themes, responsive)
│   ├── js/
│   │   └── main.js             # Live search/filter, BibTeX copier, theme toggle
│   └── images/
│       └── harshit_avatar.jpg  # Profile portrait photo
├── .nojekyll                   # Bypasses Jekyll processing on GitHub Pages
└── README.md                   # Hosting and customization guide
```

---

## 🎨 Features & Sections

- **Top Callout Banner & Header Links**: Prominent link to art portfolio ([harshitagrawal.com](https://harshitagrawal.com)).
- **Education**: MIT Media Lab (MS, Fluid Interfaces Group) & IIT Guwahati (B.Des).
- **Work Experience**: Adobe Design (Machine Intelligence & New Technologies), Conduent Labs / Xerox Research, MIT Media Lab.
- **Academic Papers**: Comprehensive list of 13 publications (ACM UIST, IUI, TEI, UBICOMP, IDC, IEEE Pervasive Computing, etc.) with:
  - Project descriptions and award badges (e.g., Best Demo Award at UIST 2015, Lumen Prize Shortlist).
  - DOI / project / video links.
  - One-click copyable BibTeX citations.
  - Interactive live keyword search & topic filters (Awards, Embodied & Robotics, Digital Fabrication, AI & Art).
- **Selected Patents**: 4 issued/published patents in customer journey visualization, persona intervention, neural template extraction (NeurTEx), and object layers.
- **Selected Art Exhibitions**: 27+ exhibitions including *Exo-Stential* (India's 1st Solo AI Art Show), *Gradient Descent* (Nature Morte), *Google Arts and Culture* (MAP Bangalore), *Ars Electronica*, *Museum of Tomorrow*, *HNF Germany*.
- **Fellowships & Awards**: Sanatan Sangeet Puraskar, Lumen Prize Shortlist & Longlists, INK Fellow, Museum of Tomorrow Innovation Fellow, IUSSTF S.N. Bose Scholar.
- **Art Residencies**: Google Arts & Culture, Art Center Nabi, Museum of Tomorrow, X-Lab Japan, Ardmore Ceramic Studio.
- **Selected & Invited Talks**: TEDx talks, G20 Cultural Tracker, MAP Bangalore, British Council, Art Mumbai, INK Talks, PICNIC Brazil, etc.
- **Press & Media Coverage**: BBC, IEEE Computer Graphics, The Telegraph, Fast Company, Artnet, LiveMint, Gizmodo, Makezine, Core77, Adafruit, Tested, Motherboard, etc.
- **Dark Mode / Light Mode**: Seamless theme toggle remembering user preference.
- **Responsive**: Mobile, tablet, and desktop optimized.
