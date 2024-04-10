// src/globalData.js
import Project1Image from '@/assets/Project1.svg';

export default {
    url: 'https://example.com',
    name: 'Example Name',
    dataBlock: {
        // Your data here
    },
    socials: [
        {
            imageUrl: "https://cdn.simpleicons.org/linkedin/white",
            name: 'LinkedIn',
            profileUrl: 'https://www.linkedin.com/in/diego-alejandro-llanos-gareca-b516a6195'
        },
        {
            imageUrl: 'https://cdn.simpleicons.org/github/white',
            name: 'Github',
            profileUrl: 'https://github.com/llanos1205'
        },
        {
            imageUrl: 'https://cdn.simpleicons.org/facebook/white',
            name: 'Facebook',
            profileUrl: 'https://www.facebook.com/diego.llanosgareca'
        }
    ],
    jobs: [
        {
            company: 'Source Infinity',
            role: 'Intern',
            startDate: 'Sep 2023',
            endDate: 'April 2024',
            descriptionPoints: [
                'Develop web API with c# .net core 7',
                'Build pipelines in github actions for C# .Net core and react web applications and deploy in GCP with terraform and docker'
            ],
            tools: [
                { name: 'Google Cloud', color: '#00FF00' },
                { name: 'C#', color: '#CC2927' },
                { name: 'GitHub Actions', color: '#FFFFFF' },
                { name: 'Terraform', color: '#CC2927' }
            ]
        },
        {
            company: 'Encora',
            role: 'DevOps Engineer II',
            startDate: 'Mar 2022',
            endDate: 'Sep 2023',
            descriptionPoints: [
                "Cluster administration, integrated FluxCD (GitOps) into the company clusters (EKS), allowing code - versioned cluster configuration across environments, drastically reducing time to lift and configure new environments.",
                "Key part in the migration from Azure DevOps to GitHub, in a way workflow is never interrupted, both new and old projects would have their repository creation and sync dynamically with Terraform.",
                "Developed lambda functions as temporary fixes for critical services until the development team could generate a more robust solution."
            ],
            //change tools to follow the same structure as the other job

            tools:
                [
                    { "name": "Python", "color": "#4EAA25" },
                    { "name": "AWS", "color": "#FF9900" },
                    { "name": "Kubernetes", "color": "#FFFFFF" },
                    { "name": "Flux CD", "color": "#1A1918" },
                    { "name": "Helm", "color": "#FFFFFF" },
                    { "name": "Terraform", "color": "#CC2927" },
                    { "name": "GitHub Actions", "color": "#FFFFFF" },
                    { "name": "Azure DevOps", "color": "#FF0000" },
                    { "name": "Nginx", "color": "#269539" },
                    { "name": "IIS", "color": "#CC2927" },
                    { "name": "Bash", "color": "#4EAA25" },
                    { "name": "Powershell", "color": "#FF0000" },
                    { "name": "Bitbucket CI", "color": "#FFA500" }
                ]
        },
        {
            company: 'Fassil Bank',
            role: 'DevOps Engineer I',
            startDate: 'Jan 2021',
            endDate: 'Mar 2022',
            descriptionPoints: [
                "Lead the company's integration to cloud technologies (with Azure) and DevOps culture, which resulted in the migration from classic on-premise infrastructure and heavily documented manual deployments to Kubernetes-based solutions with CICD pipelines for deployments.",
                "Streamlined regulatory compliance through a hybrid infrastructure with Azure AKS and Azure Arc, which allowed the company to enjoy cloud benefits while complying with the country's regulatory laws."
            ],
            tools:
                [
                    { "name": "C#", "color": "#CC2927" },
                    { "name": "Azure", "color": "#FFFF00" },
                    { "name": "Azure DevOps", "color": "#FFA500" },
                    { "name": "Docker", "color": "#00FF00" },
                    { "name": "Kubernetes", "color": "#FFFFFF" },
                    { "name": "Azure Bicep", "color": "#00FFFF" },
                    { "name": "Nginx", "color": "#269539" },
                    { "name": "SQL Server", "color": "#CC2927" },
                    { "name": "Powershell", "color": "#FFFFFF" }
                ]

        },
        {
            company: 'Sofie Ltda.',
            role: 'Intern',
            startDate: 'May 2020',
            endDate: 'Sep 2020',
            descriptionPoints: [
                'Developed Internal inventory management system with Python and Django',
            ],
            tools: [ { "name": "Python", "color": "#4EAA25" }]
        },
    ],
    skills: [
        {
            name: "AWS",
            iconUrl: "https://cdn.simpleicons.org/amazonaws/white",
            level: 1.0
        },
        {
            name: "Azure",
            iconUrl: "https://cdn.simpleicons.org/microsoftazure/white",
            level: 0.8
        },
        {
            name: "Google Cloud",
            iconUrl: "https://cdn.simpleicons.org/googlecloud/white",
            level: 0.3
        },
        {
            name: "Docker",
            iconUrl: "https://cdn.simpleicons.org/docker/white",
            level: 1.0
        },
        {
            name: "Kubernetes",
            iconUrl: "https://cdn.simpleicons.org/kubernetes/white",
            level: 0.9
        },
        {
            name: "Flux CD",
            iconUrl: "https://cdn.simpleicons.org/flux/white",
            level: 0.8
        },
        {
            name: "Helm",
            iconUrl: "https://cdn.simpleicons.org/helm/white",
            level: 0.6
        },
        {
            name: "Docker Swarm",
            iconUrl: "https://cdn.simpleicons.org/docker/white",
            level: 0.7
        },
        {
            name: "Terraform",
            iconUrl: "https://cdn.simpleicons.org/terraform/white",
            level: 0.8
        },
        {
            name: "Azure Bicep",
            iconUrl: "https://cdn.simpleicons.org/microsoftazure/white",
            level: 0.6
        },
        {
            name: "Jenkins",
            iconUrl: "https://cdn.simpleicons.org/jenkins/white",
            level: 0.35
        },
        {
            name: "Bitbucket CI",
            iconUrl: "https://cdn.simpleicons.org/bitbucket/white",
            level: 0.4
        },
        {
            name: "GitHub Actions",
            iconUrl: "https://cdn.simpleicons.org/githubactions/white",
            level: 0.9
        },
        {
            name: "Azure DevOps",
            iconUrl: "https://cdn.simpleicons.org/azuredevops/white",
            level: 1.0
        },
        {
            name: "Nginx",
            iconUrl: "https://cdn.simpleicons.org/nginx/white",
            level: 0.8
        },
        {
            name: "IIS",
            iconUrl: "https://cdn.simpleicons.org/internetexplorer/white",
            level: 0.6
        },
        {
            name: "SQL Server",
            iconUrl: "https://cdn.simpleicons.org/microsoftsqlserver/white",
            level: 0.7
        },
        {
            name: "Mongo DB",
            iconUrl: "https://cdn.simpleicons.org/mongodb/white",
            level: 0.7
        },
        {
            name: "C# .NET",
            iconUrl: "https://cdn.simpleicons.org/dotnet/white",
            level: 0.55
        },
        {
            name: "Python",
            iconUrl: "https://cdn.simpleicons.org/python/white",
            level: 0.8
        },
        {
            name: "Vue",
            iconUrl: "https://cdn.simpleicons.org/vuedotjs/white",
            level: 0.01
        },
        {
            name: "Flutter",
            iconUrl: "https://cdn.simpleicons.org/flutter/white",
            level: 0.2
        },
        {
            name: "Bash",
            iconUrl: "https://cdn.simpleicons.org/gnubash/white",
            level: 0.8
        },
        {
            name: "Powershell",
            iconUrl: "https://cdn.simpleicons.org/powershell/white",
            level: 0.60
        }
    ],
    projects: [
        {
            name: 'Migration from on-premise to cloud',
            description: 'Had the opportunity to migrate a company from on-premise infrastructure mostly based on IIS hosted services into a cloud based infrastructure with a hybrid Kubernetes cluster',
            imageUrl: "https://cdn.simpleicons.org/kubernetes/white",
            steps:[
                {
                    iconUrl: 'https://cdn.simpleicons.org/linux/white',
                    description: 'Initial On premise infrastructure'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/docker/white',
                    description: 'Dockerize applications to scape from IIS'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/terraform/white',
                    description: 'Terraform to create infrastructure in Azure'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/docker/white',
                    description: 'Lift docker swarm in Azure servers'
                }
                ,
                {
                    iconUrl: 'https://cdn.simpleicons.org/kubernetes/white',
                    description: 'Upgrade to Kubernetes in Azure with AKS'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/microsoftazure/white',
                    description: 'Set up Hybrid infrastructure with Azure Arc'
                }
                ,
                {
                    iconUrl: 'https://cdn.simpleicons.org/microsoftazure/white',
                    description: 'All applications in Azure Kubernetes with connection to in-house services'
                }

            ]
        },
        {
            name: 'Kubernetes introduction to FluxCD',
            description: 'Brought GitOps to the company with FluxCD and Helm allowing pull based deployments and versioned cluster configurations across environments. Now complete environments can be replicated in matter of seconds',
            imageUrl: "https://cdn.simpleicons.org/flux/white",
            steps:[
                {
                    iconUrl: 'https://cdn.simpleicons.org/git/white',
                    description: 'Created a centralized repository for all the cluster configurations'
                }
                ,
                {
                    iconUrl: 'https://cdn.simpleicons.org/flux/white',
                    description: 'Installed Flux CD on the cluster'
                }
                ,
                {
                    iconUrl: 'https://cdn.simpleicons.org/helm/white',
                    description: 'Created repository and helm registry sources in flux'
                }
                ,
                {
                    iconUrl: 'https://cdn.simpleicons.org/kubernetes/white',
                    description: 'Created base configurations for all the services and environment specific configurations'
                }
                ,
                {
                    iconUrl: 'https://cdn.simpleicons.org/flux/white',
                    description: 'Complete environment can be replicable in a new cluster with a simple git push'
                }
            ]
        },
        {
            name: 'Serverless functions',
            description: 'Using lambda functions to solve critical issues, not letting the scripting skills go to waste',
            imageUrl: 'https://cdn.simpleicons.org/awslambda/white',
            steps:[
                {
                    iconUrl: 'https://cdn.simpleicons.org/python/white',
                    description: 'Python and C# based lambda functions'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/microsoftsqlserver/white',
                    description: 'Reporting and data processing functions'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/awslambda/white',
                    description: 'Temporary fixes for critical services while the team develops a more robust solution'
                }

            ]
        },
        {
            name: 'Portfolio',
            description: 'My personal portfolio, although front end is not my strong suit, I wanted to have a place to showcase my work and skills',
            imageUrl: 'https://cdn.simpleicons.org/vuedotjs/white',
            steps:[
                {
                    iconUrl: 'https://cdn.simpleicons.org/vuedotjs/white',
                    description: 'Create a Vue App'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/github/white',
                    description: 'Create a GitHub Repository'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/githubactions/white',
                    description: 'Push it with github actions'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/githubpages/white',
                    description: 'Serve it with Github Pages'
                }
            ]

        },
        {
            name: 'Storage solutions',
            description: 'The backend developer in a project to create a storage solution for a company, here I had to create both the backend and the infrastructure. I hope is still running ! https://cloud.sourceinfinity.co',
            imageUrl: 'https://cdn.simpleicons.org/csharp/white',
            steps:[
                {
                    iconUrl: 'https://cdn.simpleicons.org/github/white',
                    description: 'Create a GitHub Repository'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/vuedotjs/white',
                    description: 'Created a C# web api'
                },

                {
                    iconUrl: 'https://cdn.simpleicons.org/githubactions/white',
                    description: 'Push it with github actions'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/terraform/white',
                    description: 'Create infrastructure with terraform'
                },
                {
                    iconUrl: 'https://cdn.simpleicons.org/googlecloud/white',
                    description: 'Lifted servers in Google Cloud'
                }
                ,
                {
                    iconUrl: 'https://cdn.simpleicons.org/docker/white',
                    description: 'Deployed the application using docker'
                }

            ]

        }
        ]
};