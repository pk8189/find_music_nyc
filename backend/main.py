import json

from fastapi import FastAPI

app = FastAPI()


@app.get("/api")
def read_root():
    data = json.load(open("fake_data.json"))
    return data
