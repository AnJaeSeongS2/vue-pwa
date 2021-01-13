###
0. 테스트 웹앱 환경: https://sonan.site
### TODOLIST
1. pwa 로 빌드될 때, serviceworker-cache-polyfill 에 포함되는 파일들이 static한 파일이 더 있는데 그부분이 누락되는 기분이다. 확인 필.
    * ref: https://geundung.dev/87?category=800492
8. pwa 로 만들면, playstore등등 에서 소액결제로 인한 수수료 안내도 될듯.
9. 다마고치를 pwa로 만들자! offline상태에서 했던 작업은 online이 연결됐을 때 어떻게 처리할 까? offline임을 배경으로 알려줌, 재연결시 연출이 나옴.
10. webpack4 를 공부하여, 번들링되는 방식을 확인한다.
  * ref: https://beomy.tistory.com/42
11. dev-server는 express기반이다.
  * ref: https://expressjs.com/ko/starter/hello-world.html

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
12. vue style-guide 정독
  * ref: https://kr.vuejs.org/v2/style-guide/index.html
