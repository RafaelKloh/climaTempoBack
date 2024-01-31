import { Router } from "express"
import { criarGrafico } from "../controller/grafico.controller.js"


const graficoRouter = Router()
graficoRouter.get('', criarGrafico)
export { graficoRouter }
