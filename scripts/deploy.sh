#!/bin/bash

# Replace these values with your actual ECR image details
AWS_ACCOUNT_ID="your-aws-account-id"
AWS_REGION="your-aws-region"
ECR_REPOSITORY="your-ecr-repository"
DOCKER_IMAGE_TAG="your-image-tag"

# Log in to the ECR registry
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# Pull the Docker image from ECR
docker pull $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$DOCKER_IMAGE_TAG

# Run the Docker container
docker run -d --name myapp-container -p 80:3000 $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$DOCKER_IMAGE_TAG
