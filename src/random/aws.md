Create Iam user with admin access

AWS CLI Setup

aws cli install
aws --version
aws configure >
access key, secret key, region, json

aws s3 ls - to verify CLI is configured properly

AWS cloud fromation: IAAC
Infra as a code
CDK is an abstract of AWS CF

Cloud Formation Stack:
Multiple resources handled together.

JSON/ Yaml deployed in a service, generate multiple resources
using utility functions such as -get, -ref, -import etc and deployment
parameters.

How CDK & AWS CF linked?
CDK calls a function called Synthesize which will
generate cloud Formation template file(json/yaml) which will be used to 
deploy and generate aws resources.

CDK -> synth -> CF template -> deployment params -> AWS CF

2. Stack creation
create stack using json template.

To delete a stack bucket should be empty.

CDK setup:
npm i -g aws-cdk
cdk --version
cdk init
 cdk init --language=typescript

 Starter project will get initialized with boilerplate code

 bin > to start cdk
 lib > to define stack
 cdk.json > configures cdk simlilar to webpack
 Entry point of our project, "app"
"app": npx ts-node --prefer-ts-exts bin/cdk-starter.ts 
 npx - node execute
 ts-node -> ts libray

Resources:
AWS construct library documentation
AWS cdk github
cdk-starter.ts -> stacks can be initiated and assigned to CDK app.

to deploy app
cdk bootstrap ->  cmd to be executed to setup deployment ready

CDKToolkit stack will be created under CF -> stack, have to choose region correctly in global, Mumbai
Stack Desc - This stack includes resources needed to deploy AWS CDK apps into this environment
Stack Resources will have - StagingBucket, it is required to deploy CDK

cdk deploy -> synthesize -> generate resources

CdkStarterStack stack will be created under CF -> stack 
verify CDKMeta data under resources
CDK deploy does to things -> 
It generate CdkStarterStack.template and deploys it
CDK Out folder CdkStarterStack.template will deployed in AWS CF

to verify our configuration valid and cdk to create valid CFtemplate from our code and to skip deployment 

cdk Synth -> only generate a template skip deployment