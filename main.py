from fastapi import FastAPI
import spam.starter as starter

app = FastAPI()


@app.get("/")
def predict_spam(text: str):
    words = starter.process_email(text)
    predictions = [starter.predict_naive_bayes(starter.emails, word) for word in words]
    return predictions 
