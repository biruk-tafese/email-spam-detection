from fastapi import FastAPI
import spam.starter as starter

app = FastAPI()


@app.get("/")
def spam_detector(text: str):
    return starter.input_text(text)
