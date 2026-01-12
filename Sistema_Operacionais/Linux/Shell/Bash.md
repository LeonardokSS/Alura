## Bash Shell 

## Prompt (message shown in the terminal)
-The bash prompt is simple to understand. By default, it shows information like your username **(who you are)**, your computer's name **(hostname)**, and the **folder/directory you're currently working in**. It's a line of text that appears on the screen to let you know the system is ready for you. The prompt appears on a new line, and the cursor (the blinking line or box) is placed right after it, waiting for you to type a command.

`<username>@<hostname><current working directory>$`

- Example when you are in the Home or Default  
`<username>@<hostname>[~]$`

- When we are logged with the root user **($ = user, # = root)**  
`root@htb[/htb]#`

<br>

## Customizing the line of prompt in shell
- The **PS1** variable in Linux systems controls how your command prompt looks in the terminal. It's like a template that defines the text you see each time the system is ready for you to type a command. By customizing the PS1 variable, you can change the prompt to display information such as your username, your computer's name, the current folder you're in, or even add colors and special characters. This allows you to personalize the command-line interface to make it more informative or visually appealing.

- The prompt can be customized using special characters and variables in the shell’s configuration file **(.bashrc for the Bash shell)**. For example, we can use: the `\u` character to represent the current username, `\h` for the hostname, and `\w` for the current working directory.

Special Character | Description
--- | ---
`\d` | Date (Mon Feb 6)
`\D{%Y-%m-%d}` | Date (YYYY-MM-DD)
`\H` | Full hostname
`\j` | Number of jobs managed by the shell
`\n` | Newline
`\r` | Carriage return
`\s` | Name of the shell
`\t` | Current time 24-hour (HH:MM:SS)
`\T` | Current time 12-hour (HH:MM:SS)
`\@` | Current time
`\u` | Current username
`\w` | Full path of the current working directory
