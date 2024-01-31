import {conexao} from "./conexao.js";
import express from 'express'
import cors from "cors"
import { graficoRouter } from "./rota/grafico.rotas.js";


const server = express()
server.use(cors())
server.use(express.json())
server.use('/grafico',graficoRouter)
 const db = conexao.connect(()=>{
    console.log('database connected')
 })
server.listen(3000,async ()=>{
    console.log('Server rodando')
    
})