from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# Подключаем статику (убедись, что папка static существует)
if os.path.exists("static"):
    app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/index")
async def home():
    # Мы просто отдаем файл как он есть, без Jinja2
    return FileResponse("templates/index.html")

@app.get("/indexru")
async def get_indexru():
    return FileResponse("templates/indexru.html")

@app.get("/Ensemble")
async def get_ensemble():
    return FileResponse("templates/Ensemble.html")

@app.get("/indexkz")
async def get_indexkz():
    return FileResponse("templates/indexkz.html")