# 準備

firebaseのアカウントを作成

AuthenticationでGoogle認証を使うように設定

sampleファイルを用意しているので、それをもとに以下のファイルを作成

- .env
- .firebaserc
- functions/.runtimeconfig.json

.runtimeconfig.jsonはfirebaseに設定されているものから作る事もできる

```
firebase functions:config:get > functions/.runtimeconfig.json
```

# ローカル実行

```
docker-compose up
docker-compose exec functions /app/scripts/start_functions.sh
docker-compose exec functions firebase login
docker-compose exec functions npm run serve
```

http://127.0.0.1:3000/


# firebaseデプロイ

```
firebase functions:config:set microcms.baseurl='https://AAA.microcms.io/api/v1' microcms.apikey='XXXXXXXXXXXXXXX' auth.domain='ZZZ.com'
docker-compose exec functions firebase login
docker-compose exec functions firebase deploy --only functions
docker-compose exec nuxt npm run build
firebase deploy --only hosting
```

Github Actionsとかでやるっしょ
