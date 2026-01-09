# Gobuster 

# Definição
- O **Gobuster** é uma ferramenta que envia diversas requisições http para o server, e descobre diversas rotas escondidas e novos diretórios que não estão devidamente protegidos.


# Como funciona?
- Essa ferramenta basicamente usa listas prontas para realiza diversas tentativas **brute force**


---

## Principais comandos 

# Dica:
- As listas para os diretórios ficam no caminho : 
 - **/usr/share/wordlists/dirb/common.txt** 

- Enumerar diretórios
    - **gobuster dir -u https://site.com -w /usr/share/wordlists/dirb/common.txt**

- Enumerar diretórios, com extensões mais utilizadas (php,html,txt)
    - **gobuster dir -u https://site.com -w wordlist.txt -x php,html,txt**

- Enumerar subdomínios (dns)
    - **gobuster dns -d site.com -w /usr/share/wordlists/dns/subdomains-top1million-5000.txt**

