# 🌥️ Ryan’s Cloud‑Powered Angular Portfolio

This project is my first real step into deploying applications in the cloud.  
It’s a simple Angular portfolio site — not fully finished yet — but the real purpose of this repo is to show how I used **Google Cloud Platform (GCP)** and **GitHub Actions** to build and deploy a live application.


---

## 🚀 What This Project Demonstrates

Cloud engineering skills:

- **[Angular application development](ca://s?q=Explain_how_Angular_apps_work)** — components, routing, environment configs  
- **[CI/CD automation](ca://s?q=Explain_CICD_fundamentals)** — GitHub Actions building + deploying  
- **[Cloud hosting](ca://s?q=Explain_cloud_hosting_basics)** — static hosting on GCP  
- **[Artifact‑based deployments](ca://s?q=Explain_build_artifacts)** — bundling Angular output and pushing to cloud storage  
- **[Environment‑driven builds](ca://s?q=Explain_environment_variables_in_CICD)** — GitHub secrets + Angular environments  


---

## 🌐 Live Demo

The site is currently accessible at:

**http://ryan-portfolio-123.s3-website-us-east-1.amazonaws.com/**


---

## 🧠 Why I Built This

This project exists because I wanted to learn how to:

- Build and bundle an Angular application  
- Automate builds with GitHub Actions  
- Deploy static assets to GCP  
- Make a real site reachable on the internet  
- Understand what cloud workflows feel like end‑to‑end  


---

## 🛠️ Tech Stack

- **Angular**  
- **TypeScript**  
- **Node.js**  
- **GitHub Actions** (CI/CD)  
- **Google Cloud Platform**  
  - Cloud Storage  
  - IAM + service accounts  

---

## 🔄 CI/CD Pipeline Overview

The GitHub Actions workflow handles:

1. **[Triggering on push](ca://s?q=Explain_GitHub_Actions_triggers)** to `main`  
2. Installing dependencies  
3. Building the Angular app in production mode  
4. Uploading build artifacts to GCP  
5. Refreshing hosting so the new version goes live  

A simple but real deployment pipeline

---

## 📦 Project Structure

```
/src
  /app
  /assets
  /environments
.github/workflows
angular.json
package.json
README.md
```

---

## 🧭 What’s Next

Potential next steps:

- **[Improve the UI/UX](ca://s?q=How_to_improve_Angular_UI)**  
- **[Add a backend API](ca://s?q=How_to_add_a_backend_API_to_Angular)** (Cloud Run, Cloud Functions, Node, etc.)  
- **[Move hosting fully to GCP or AWS](ca://s?q=How_to_host_static_sites_on_GCP)**  
- **[Add Terraform](ca://s?q=Start_learning_Terraform)** for infrastructure as code  
- **[Add monitoring/logging](ca://s?q=Explain_cloud_monitoring_basics)**  

---

