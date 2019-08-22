#!/bin/bash
sed -e "s|{RECAPTCHA_SITE_KEY}|$RECAPTCHA_SITE_KEY|g" \
    -e "s|{API_BASEURI}|$API_BASEURI|g" \
    < .env.template \
    > .env
