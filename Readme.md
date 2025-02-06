
commands to pull postgres and setup:
Run this commands in terminal
<br />
docker volume create **volume-name**
<br />
docker run --name **container-name** -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -v **volume-name** -d postgres
