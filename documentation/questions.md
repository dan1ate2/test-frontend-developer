# Technical Questions

## How can you guarantee 100% uptime for your application?

Answer: You cannot fully 'guarantee' 100% uptime, however there are certain things that can be done to reduce downtime.
Some examples include failure detection (e.g. monitoring logs through AWS Cloudwatch), load balancing, unit testing, 

## What would you do to scale up this application to handle 10,000 requests a second?

Answer: Implementing load balancing such as AWS Elastic Load Balancing.

## How would you record stats about user activity? (eg. Logins, to-do items created and completed.)

Answer: The simple way would be collecting logs in something like CloudWatch, but a better solution would use a streaming data service like AWS Kinesis Data Firehose to push these metrics into either a data lake, database or some other storage (eg S3) that can then be queried.

## How can this task be split apart to be done as efficiently as possible by a team of developers?

Answer: We could split this task by component and for a larger project split those into API's which can be called to update states.

## What technology stack do you choose for your proposed solution, and why?

Answer: Create React App was used for this project to get things up and running quickly and easily. There are many other frameworks but this one is much simpler and doesn't bundle an excessive amount of tools and libraries with it.

## How will you deploy your solution?

Answer: I would consider something simple like AWS Lambda for the application as it's small and Lambda supports NodeJS.

## How will you ensure that user data is secure?

Answer: AWS Lambdas are already secure using SSL/TLS for communications and there isn't any persisted data in this application.

## What potential risks can you see during the development and deployment of this system?

Answer: The main ussie with this application is the data isn't persisted, so data loss could occur if the application crashes.

## Is there anything you think the requirements have overlooked?

Answer: Supporting (multiple) users and multiple lists.
