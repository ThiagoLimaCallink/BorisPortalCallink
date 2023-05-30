#-*- coding: utf-8 -*-
################################### Biblotecas ###########################################################################################
import traceback #Library for erros
from google.cloud import pubsub_v1 #Pubsub
import json #Library for json
import requests
from ipaddress import ip_address, ip_network
###########################################################################################################################################

#--------------------------------------------------------------------------#
#Descricao: Função de recepção do request realizado pelo usuário
#Parametro request: Json recebido 
#Autor: Oswaldo Veloso de Paula (oswaldo.veloso@callink.com.br)
#Dara: 2023-03-01
#--------------------------------------------------------------------------#
def endpoint(request):
    try:
        ip = request.headers["x-forwarded-for"]
        if (ip_address(ip) in ip_network('201.48.241.0/24') or ip_address(ip) in ip_network('187.28.51.128/26')):
            request_json = request.get_json()
            request_json.update({"codBot": "CALLINK"})
            resposta = envia_requisicao(request_json)
            return resposta.text
        else:
            mensagem = "Ip não permitido para acessar esta função"
         
            headers = create_headers()
        return (mensagem, 200, headers)
    except:
         return ({}, 500, create_headers())
#--------------------------------------------------------------------------#
#Descrição: Envia a mensagem para a ADM_Gera_Relatórios no projeto principal
#Autor: Sarah Maria BRaga Silva
#Data: 2023-03-02
#--------------------------------------------------------------------------#
def envia_requisicao(data):
    try:
        req = requests.post('https://southamerica-east1-biclk-203418.cloudfunctions.net/ADM_Gera_Relatorios', json=data)
        return req
    except:
        print(traceback.format_exc())
        return '400'
    #--------------------------------------------------------#
def create_headers():
    """
        ### Cria os headers
        args:
            None
        retorno:
            headers para o cors
    """
    return {
            'Access-Control-Allow-Origin': '*'
        }

#-------------------------------------------------------#
#Autor: Oswaldo Veloso de Paula
#Data: 2022-09-01
#--------------------------------------------------------#
def validaMetodo():
    """
        ### Para metodos do tipo get e options
        args:
            None
        retorno:
            headers e retorno para a aplicacao 
    """
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600'
    }

    return headers