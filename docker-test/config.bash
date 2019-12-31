#!/bin/bash

if [[ -e ~/.arangodb-docker-enterpise-key ]]; then
    .  ~/.arangodb-docker-enterpise-key
fi

host_ip="127.0.0.1"
bind_ip="0.0.0.0"
image="arangodb/enterprise-preview:3.6.0"
enterpise_key="${enterpise_key:-${ARANGO_LICENSE_KEY}}"
