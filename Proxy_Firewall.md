# Kali Linux — Anotações
![Logo do R](/kali.png)
## 🔐 Login padrão
**Usuário:** `kali`  
**Senha:** `kali`

---

## 🛠️ Ferramentas

### **1. whatweb `<url>`**
Usado para pegar informações sobre um site, como:
- Endereço IP  
- Tecnologias usadas  
- Servidores  
- Redirecionamentos  
- Proteções (CloudFront, WAF, etc.)

---

# 🌐 Proxy Reverso (ex.: CloudFront)

## **O que é**
Um proxy reverso fica **entre o usuário e o servidor real**.  
O usuário **nunca acessa o servidor diretamente**.

Ele recebe todas as requisições primeiro e decide se deve:
- entregar conteúdo do cache  
- repassar para o servidor real  
- bloquear  
- redirecionar  

---

## **Funções principais do proxy**

### ✔ Proteção  
Esconde o servidor real e evita ataques diretos.

### ✔ Cache  
Entrega conteúdo já armazenado, economizando recursos.

### ✔ Roteamento  
Distribui o tráfego entre vários servidores (balanceamento de carga).

### ✔ Performance  
Entrega conteúdo a partir do servidor mais próximo do usuário.

---

## **Fluxo simplificado**

---

# 🔥 Como funciona o Firewall (WAF) no Proxy

O WAF fica **dentro do proxy reverso** e analisa cada requisição antes dela chegar ao servidor.

## **O WAF verifica**
- **User-Agent** (se é navegador, bot ou scanner)
- **Headers HTTP** (se estão corretos ou faltando)
- **Quantidade de requisições** (rate limiting)
- **Padrões de ataque** (SQL Injection, XSS, scans automatizados)
- **Origem da requisição** (IP, país, reputação)
- **URLs acessadas** (tentativas de acessar /admin, /login, etc.)

---

## **O que o WAF pode fazer**
- ✔ Permitir a requisição  
- ❌ Bloquear (403 Forbidden)  
- 🔄 Redirecionar  
- 🔐 Desafiar (captcha, validação)  
- 📝 Registrar para análise e logs  
