import { rejects } from "assert"
import {conexao} from "../conexao.js"
import { resolve } from "path"



export async function selectDados(){  
    return new Promise ((resolve,rejects)=>{
            conexao.query(`SELECT temperatura, data FROM clima `,(erroSelect,resultSelect)=>{
                resolve(resultSelect)
            })
        })
    }
    
