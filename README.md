# Portfolio

This is a web portafolio that holds data of my cv, feel free to use it as a template I dont mind

## Tech

- vue3 (tha page itself)
- github actions (automation for deployment to github pages)
- aws route 53 (custom dns resolution)

## How to run

To run this Vue3 project, follow these steps:

1. Clone the repository to your local machine.
3. Install the project dependencies by running the command: `npm install`.
4. Start the development server with the command: `npm run dev`.

That's it! You should now be able to run the Vue3 project locally on your machine.

## The pipeline

the pipeline is based on github actions and does the following:

1. Compile the project artifact
2. Inject into the artifact a CNAME file with the url for the project
3. Deploy the artifact into github pages

the pipeline is located at `.github\workflows\pipeline.yml`

## Production 

You can find this page running at 

https://www.llanoscorp.com

## Disclaimer 

I AM NOT a frontend engineer nor a designer, so the quality in design, animation, color palette and project structure is below minimal, the main focus is the skills mentioned in the page as a DevOps engineer.

