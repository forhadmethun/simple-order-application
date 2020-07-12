Simple Order Application
=========================
This is a simple order application built in Spring boot and React. 

Functionality: 
---
- Backend
  - order insert API
  - order list API
- Frontend
  - login page
  - order addition
  - order list

Requirement: 
---
Java 14, React 16.13+

Deployment:
---
- Clone the repository.
- Run the Java application.
  - the following commands will run the application  run on `http://localhost:8080/`
```
cd dispatch
./gradlew bootJar
cd build/libs/
java -jar dispatch-0.0.1-SNAPSHOT.jar
```
- Run the React application
  - the following commands will run the application  `http://localhost:3000/`
```
cd ..
cd dispatch-gui/
sudo yarn install
sudo yarn start
```
Misc:
---
- The Spring boot Application covers some basic unit tests