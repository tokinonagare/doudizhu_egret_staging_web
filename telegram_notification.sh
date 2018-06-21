#!/usr/bin/env bash

content=$(cat version_message)
curl -v --data-urlencode "text=斗地主 web ##{server_type} ${content}" "https://api.telegram.org/bot213022846:AAFfsv0sfyffvmZDtNftvMW0gbVimM4O1P8/sendMessage?chat_id=-1001138683387"