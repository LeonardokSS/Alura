# Linux System Information – Quick Guide

This section focuses on getting comfortable with the Linux terminal and shell while learning how to collect essential system information. These skills are fundamental for daily Linux usage and critical for security analysis, vulnerability assessment, and system auditing.

---

## Getting Help

You can always access help using:
- `-h` or `--help`
- `man <command>`

---

## Essential System Information Commands

| Command     | Description |
|------------|-------------|
| `whoami`   | Shows current username |
| `id`       | Displays user ID and group memberships |
| `hostname` | Prints system hostname |
| `uname`    | Shows OS and hardware information |
| `pwd`      | Displays current directory |
| `ifconfig` | Views or configures network interfaces |
| `ip`       | Manages network interfaces and routes |
| `netstat`  | Displays network status |
| `ss`       | Inspects sockets |
| `ps`       | Shows running processes |
| `who`      | Shows logged-in users |
| `env`      | Displays environment variables |
| `lsblk`    | Lists block devices |
| `lsusb`    | Lists USB devices |
| `lsof`     | Lists open files |
| `lspci`    | Lists PCI devices |

---

## Logging in via SSH

```bash
ssh htb-student@[IP_ADDRESS]
