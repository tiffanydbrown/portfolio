#!/bin/sh

set -e

if [ -f "$PWD"/.env ]; then
# shellcheck source=/dev/null
  . "$PWD"/.env
else
  echo 'no .env file found, if not currently deploying add .env file in project root' 1>&2
fi

if [ -n "$DATABASE_URL" ]; then
  psql "$DATABASE_URL" \
    -f "$PWD"/database/schema.sql \
    -f "$PWD"/database/data.sql
else
  echo 'no DATABASE_URL environment variable set' 1>&2
  exit 1
fi
