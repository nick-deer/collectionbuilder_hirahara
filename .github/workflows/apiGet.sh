#!/bin/bash

chmod +x script.sh

result = curl --location --request GET 'https://content.libraries.wsu.edu/digital/bl/dmwebservices/index.php?q=dmQuery/senex/0/0/nosort/1024/10/0/0/0/json' \
--header 'Content-Type: application/json' \
--data-raw 

$result >> result.json
