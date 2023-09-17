#!/bin/bash

# Replace these values with your actual ECR image details
AWS_ACCOUNT_ID="650691777252"
AWS_REGION="us-east-1"
ECR_REPOSITORY="agresive-main"
DOCKER_IMAGE_TAG="latest"

# Log in to the ECR registry
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 650691777252.dkr.ecr.us-east-1.amazonaws.com

# Pull the Docker image from ECR
docker pull $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$DOCKER_IMAGE_TAG

# Run the Docker container
docker run -d --name myapp-container -p 80:3000 $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$DOCKER_IMAGE_TAG
