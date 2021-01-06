###
0. 테스트 웹앱 환경: https://sonan.site
### TODOLIST
1. pwa 로 빌드될 때, serviceworker-cache-polyfill 에 포함되는 파일들이 static한 파일이 더 있는데 그부분이 누락되는 기분이다. 확인 필.
    * ref: https://geundung.dev/87?category=800492

### PAUSED

### DONE
2. material design icons 적용
3. footer 추가
4. vuetify 사용해보기
5. pwa 실제로 download to android app 성공할 것.
* 이를 위해서는 http -> https 변환이 필요하다.
6. certbot 을 통한 https 등록 완료
* 환경
  * mac os + nginx (servername: domainName) + 공유기 + vue
* 성공
  * sudo certbot --authenticator webroot -w /Users/jaeseong/workspace_vue/vue-pwa/dist --installer nginx
7. nginx 를 통한 webapp service.
