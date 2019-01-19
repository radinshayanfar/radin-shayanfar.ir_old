#!/usr/bin/env bash

cd $(dirname $0)/..
set -x

source config

CACHE="max-age=31536000,public"
NO_CACHE="max-age=0,no-cache,no-store,must-revalidate"

scripts/build.sh
aws s3 sync dist s3://$AWS_BUCKET_NAME --cache-control $CACHE --acl public-read --region $AWS_REGION --profile $AWS_PROFILE
aws s3 cp dist s3://$AWS_BUCKET_NAME --exclude "*" --include "*.html" --cache-control $NO_CACHE --recursive --acl public-read --region $AWS_REGION --profile $AWS_PROFILE
aws s3 cp dist s3://$AWS_BUCKET_NAME --exclude "*" --include "*/sw.js" --cache-control $NO_CACHE --recursive --acl public-read --region $AWS_REGION --profile $AWS_PROFILE
aws cloudfront create-invalidation --distribution-id $AWS_CLOUDFRONT_ID --region $AWS_REGION --profile $AWS_PROFILE --paths '/*'
