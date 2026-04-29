from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os

app = FastAPI()

# Подключаем статику
if os.path.exists("static"):
    app.mount("/static", StaticFiles(directory="static"), name="static")
else:
    # Создаем папку, если забыли, чтобы не было ошибки
    os.makedirs("static", exist_ok=True)

# Инициализируем шаблоны
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    # Исправленный вариант: контекст передается вторым аргументом
    return templates.TemplateResponse(
        request=request, name="index.html", context={"title": "Главная"}
    )

@app.get("/ru", response_class=HTMLResponse)
async def get_indexru(request: Request):
    return templates.TemplateResponse(
        request=request, name="indexru.html"
    )

@app.get("/kz", response_class=HTMLResponse)
async def get_indexkz(request: Request):
    return templates.TemplateResponse(
        request=request, name="indexkz.html"
    )

@app.get("/ensemble", response_class=HTMLResponse)
async def get_ensemble(request: Request):
    return templates.TemplateResponse(
        request=request, name="Ensemble.html"
    )