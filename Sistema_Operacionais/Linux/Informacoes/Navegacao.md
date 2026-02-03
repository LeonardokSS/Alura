# Navigation Basics
-  **Pwd** : Finds out where you are in the terminal
-  **ls** : Print everything in the work directory

## **ls -l**    

    - Print the files with more information.


| Column Content       | Description                                           |
|----------------------|-------------------------------------------------------|
| drwxr-xr-x           | Type and permissions                                  |
| 2                    | Number of hard links to the file/directory            |
| cry0l1t3             | Owner of the file/directory                           |
| htbacademy           | Group owner of the file/directory                     |
| 4096                 | Size of the file or the number of blocks used to store the directory information |
| Nov 13 17:37         | Date and time                                         |
| Desktop              | Directory name       

## ls -la (hidden files)
    This command lists all of hidden files that can be in the directory. For instance: . bashrc or .bash_history 

## Ls + ./specific_directory
    We can list everything in a directory without navigating there.

    cry0l1t3@htb[~]$ cd /dev/shm

    cry0l1t3@htb[/dev/shm]$