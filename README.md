# Microservices With AWS Tutorial

<h2>Purpose</h2>
Source repo contains a basic REST API concerning a 'forum' database which contains Users, Posts, and Threads. Over three phases the code is modified from

  1. a basic Node project designed to be dropped onto a server 
  2. to a single Docker container app run on AWS
  3. to a series of three microservices each running as a separate microservice on AWS

Great practical example after reading [Building Microservices: Designing Fine-Grained Systems](https://samnewman.io/books/building_microservices/)

## AWS Components Touched & Their Use: 
  - Elastic Container Registry (ECR) 
    - registers containers in AWS as well as acts as a repository for container images
  - Elastic Container Service (ECS)
    - container management service which loads the containers onto EC2 resources
  - Elastic Cloud Compute (EC2) 
    - fully conifgurable hosts actually running the code
  - Elastic Load Balancer (ELB)
    - a load balancer which determines where to send a request via Target Groups which then route to specific container/port

## Source Repo README: 
### Node.js Microservices Deployed on EC2 Container Service

This is a reference architecture that shows the evolution of a Node.js application from a monolithic
application that is deployed directly onto instances with no containerization or orchestration, to a
containerized microservices architecture orchestrated using Amazon EC2 Container Service.

- [Part One: The base Node.js application](1-no-container/)
- [Part Two: Moving the application to a container deployed using ECS](2-containerized/)
- [Part Three: Breaking the monolith apart into microservices on ECS](3-microservices/)

<style type="text/css" rel="stylesheet">
  h2 { color:#0486db; }
</style>