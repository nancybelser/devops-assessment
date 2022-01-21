# devops-assessment

### Description
* This exerice is to test your skills with Node.js, Docker, and Kubernetes. You will need to dockerize a Node.js app, build out the image, and deploy it to Kubernetes. 

### Tasks
* Build an endpoint in the Node.js app to return fake data
* Build dockerfile to containerize the repository
* Build the docker image from that dockerfile
* Upload that image to docker registry
* Build the Kubernetes files to deploy the application
* Deploy the application to Kubernetes cluster
* Build CI/CD pipeline files (your preference)
* Build configmaps on the cluster to contain (for our review):
    * Dockerfile
    * Pipeline file

### Access Info
* SSH
    * User: ubuntu
    * Host: firstInitialLastName.edifyops.dev
        * Example: jsmith.edifyops.dev
    * Key: link to bucket included the email from us
* Kubectl
    * Files in the bucket included in email from us

### Environment
* Ubuntu
* Minikube
* Docker Registy
* Nginx


### Services
| Service | Port |
| ------ | ------ |
| Minikube | 9443 |
| Docker Registry | 6000 |
| App | 443 |

### Questions
* Email devops-assessment@edify.cx