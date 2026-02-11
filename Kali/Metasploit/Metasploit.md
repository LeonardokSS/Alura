# METASPLOIT
- Metasploit is a Ruby-based, modular penetration testing platform that enables you to write, test, and execute the exploit code.
- The Metasploit framework have pentest tools to test different vulnerabilities. It isn't the best and the most advanced tool in the world, but it tests common vulnerabilities.


<img src="https://cdn.services-k8s.prod.aws.htb.systems/content/modules/39/S02_SS01.png">

## METASPLOIT VERSIONS
 Metasploit Pro:
 - Task Chains
 - Social Engineering
 - Vulnerability Validations
 - GUI
 - Quick Start Wizards
 - Nexpose Integration
 
| Funcionalidade |
| :--- |
| Infiltrate |
| Collect Data |
| Remediate |
| Manual Exploitation |
| Import and Scan Data |
| Bruteforce |
| Anti-virus Evasion |
| Discovery Scans |
| Task Chains |
| IPS/IDS Evasion |
| Meta-Modules |
| Exploitation Workflow |
| Proxy Pivot |
| Nexpose Scan Integration |
| Session Rerun |
| Post-Exploitation |
| Task Replay |
| Session Clean-up |
| Project Sonar Integration |
| Credentials Reuse |
| Session Management |
| Social Engineering |
| Credential Management |
| Payload Generator |
| Team Collaboration |
| Quick Pen-testing |
| Web Interface |
| VPN Pivoting |
| Backup and Restore |
| Vulnerability Validation |
| Data Export |
| Phishing Wizard |
| Evidence Collection |
| Web App Testing |
| Reporting |
| Persistent Sessions |
| Tagging Data |

# Metasploit Framework Console
 The msfconsole provides an a all-in-one tool, tahat can acess all tools in the framework

# Architecture
 To understand fully the set of tools we need to look under the hood.

# Modules
```bash
LeonardoKss@htb[/htb]$ ls /usr/share/metasploit-framework/modules

auxiliary  encoders  evasion  exploits  nops  payloads  post
```
# Plugins
Plugins offer the pentester more flexibility when using the msfconsole since they can easily be manually or automatically loaded as needed to provide extra functionality and automation during our assessment. 
```bash
LeonardoKss@htb[/htb]$ ls /usr/share/metasploit-framework/plugins/

aggregator.rb      ips_filter.rb  openvas.rb           sounds.rb
alias.rb           komand.rb      pcap_log.rb          sqlmap.rb
auto_add_route.rb  lab.rb         request.rb           thread.rb
beholder.rb        libnotify.rb   rssfeed.rb           token_adduser.rb
db_credcollect.rb  msfd.rb        sample.rb            token_hunter.rb
db_tracker.rb      msgrpc.rb      session_notifier.rb  wiki.rb
event_tester.rb    nessus.rb      session_tagger.rb    wmap.rb
ffautoregen.rb     nexpose.rb     socket_logger.rb
```

# Scripts
Meterpreter functionality and other useful scripts.
```bash
[!bash!]$ ls /usr/share/metasploit-framework/scripts/

meterpreter  ps  resource  shell
```

# Tools
Command-line utilities that can be called directly from the msfconsole menu.

```bash
[!bash!]$ ls /usr/share/metasploit-framework/tools/

context  docs     hardware  modules   payloads
dev      exploit  memdump   password  recon
```
