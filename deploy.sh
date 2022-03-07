#!/usr/bin/env bash
DOMAIN=${DOMAIN-localhost}

echo "building certificates"
docker-compose -f info.yml build
echo "publishing certificates"
docker-compose -f info.yml push
echo "deploying traefik stack in http mode"
docker stack deploy -c info.yml info
echo "Certificates is available at:"
echo "- http://${DOMAIN}/certificados"
