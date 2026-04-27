# FastAPI App

A simple FastAPI application.

## Running Locally

1. Install dependencies: `pip install -r requirements.txt`
2. Run: `uvicorn app:app --reload`

## Docker

Build: `docker build -t fastapi-app .`

Run: `docker run -p 8000:8000 fastapi-app`

Visit: http://localhost:8000