#!/bin/bash

# Script para automatizar a criação de um repositório Git

echo "Insert the repository name(url):"
read repo_name

# Inicialize um repositório Git
git init

# Adicione e faça o commit do arquivo README.md
git add .
git commit -m "Primeiro commit: arquivo README.md"

# Adicione o repositório remoto e envie o commit inicial
git remote add origin https://github.com/jhonatanwen/$repo_name.git
git branch -M main
git push -u origin main

echo "Repositório $repo_name criado e configurado!"