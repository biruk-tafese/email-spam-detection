from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import spam.starter as starter

app = FastAPI()

# Add CORS middleware to allow access from frontend React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/predict")
def predict_spam(text: str):
    words = starter.process_email(text)
    predictions = [starter.predict_naive_bayes(starter.emails, word) for word in words]
    return predictions 
