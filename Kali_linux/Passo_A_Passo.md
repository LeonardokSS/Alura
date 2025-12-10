# 🛡️ Como Checar Vulnerabilidades em um Site  

Este guia resume **os passos essenciais** para iniciar uma análise de segurança básica usando Kali Linux.

---

## 1. 🔎 Fingerprinting (Identificar Tecnologias)
O objetivo é descobrir **como a aplicação web foi construída** — servidor, linguagem, framework, CMS, plugins, versões etc.  
Isso ajuda você a criar um **mapa mental de possíveis vulnerabilidades**.

### ✔️ Comando principal:
```bash
whatweb site.com
```

### O que procurar:
- Servidor: Apache, Nginx, IIS  
- Linguagem: PHP, Node.js, Python  
- CMS: WordPress, Joomla  
- Bibliotecas e frameworks  

---

## 2. 🔌 Portas Expostas
Muitas invasões acontecem porque alguém **esqueceu uma porta aberta**.

### Passo 1 — Descobrir o IP do alvo
```bash
dig site.com
```

### Passo 2 — Escanear as portas com Nmap
```bash
nmap IP_DO_SITE
```

### Passo 3 — Consultar o significado das portas  
(A lista abaixo já está organizada para isso.)

---

# 🔥 Portas Mais Importantes para Pentest & Nmap
Lista objetiva das portas mais relevantes, seus usos e riscos comuns.

---

## 🟦 FTP — Arquivos

### **20 — FTP Data**
- Transferência de dados no modo ativo  
- Sem criptografia

### **21 — FTP Control**
- Login, comandos e controle  
- Riscos: credenciais expostas, brute force

---

## 🟦 SSH — Acesso Remoto

### **22 — SSH**
- Acesso remoto seguro  
- Riscos: brute force, versões antigas vulneráveis

---

## 🟦 Telnet — Acesso Remoto Antigo

### **23 — Telnet**
- Acesso remoto sem criptografia  
- Altíssimo risco: tudo é enviado em texto puro

---

## 🟦 E-mail

### **25 — SMTP**
- Envio de emails  
- Risco: open relay (envio sem autenticação)

### **110 — POP3**
- Recebimento de emails  
- Sem criptografia

### **143 — IMAP**
- Consulta da caixa de entrada  
- Sem criptografia (use 993 se seguro)

---

## 🟦 DNS — Nome de Domínios

### **53 — DNS**
- Conversão de nomes em IPs  
- Risco: zone transfer se mal configurado

---

## 🟦 Web — HTTP/HTTPS

### **80 — HTTP**
- Página web sem TLS  
- Banner pode revelar Apache/Nginx/IIS

### **443 — HTTPS**
- HTTP com criptografia TLS  
- Pode ter SSL fraco, versões antigas, CVEs

---

## 🟦 SMB — Compartilhamento de Arquivos

### **139 — SMB NetBIOS**
- Compatibilidade antiga com Windows

### **445 — SMB**
- Compartilhamento moderno  
- Muito visado: EternalBlue e outras falhas críticas

---

## 🟦 Bancos de Dados

### **3306 — MySQL**
- Banco MySQL  
- Risco: acesso remoto aberto → invasão imediata

### **5432 — PostgreSQL**
- Banco PostgreSQL

### **27017 — MongoDB**
- Sem senha por padrão → crítico se exposto

---

## 🟦 Remote Desktop

### **3389 — RDP**
- Acesso remoto Windows  
- Riscos: força bruta, exploração (BlueKeep)

---

## 🟦 Proxy / Serviços Web

### **8080 — HTTP Alternativo**
- Painéis admin  
- Tomcat, proxies, dashboards

### **8443 — HTTPS Alternativo**
- Versão segura de painéis admin

---

## 🟦 Outros Importantes

### **69 — TFTP**
- Transferência simples  
- Sem autenticação → risco

### **161 — SNMP**
- Informações do sistema  
- Se "public" estiver ativo → vaza tudo

### **389 — LDAP**
- Diretórios / Active Directory  
- Grande risco em empresas

### **636 — LDAPS**
- LDAP com SSL

---

# 🧪 Exemplos Nmap para Estudo

### Scan rápido das portas mais importantes
```bash
nmap -p 20,21,22,23,25,53,69,80,110,139,143,161,389,443,445,3306,3389,8080 <alvo>
```

### Identificar versões dos serviços
```bash
nmap -sV <alvo>
```

### Scan completo de todas as portas
```bash
nmap -p- <alvo>
```

### Scripts de segurança (seguros)
```bash
nmap --script=safe <alvo>
```

