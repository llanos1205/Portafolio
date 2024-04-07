// src/globalData.js
export default {
    url: 'https://example.com',
    name: 'Example Name',
    dataBlock: {
        // Your data here
    },
    socials: [
        {
            imageUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
            name: 'LinkedIn',
            profileUrl: 'https://www.linkedin.com/in/diego-alejandro-llanos-gareca-b516a6195'
        },
        {
            imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
            name: 'Github',
            profileUrl: 'https://github.com/llanos1205'
        },
        {
            imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg',
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
                { name: 'Google Cloud', color: '#4285F4' },
                { name: 'C#', color: '#68217A' },
                { name: 'GitHub Actions', color: '#FFFFFF' },
                { name: 'Terraform', color: '#5C4EE5' }
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
                    { "name": "Kubernetes", "color": "#326CE5" },
                    { "name": "Flux CD", "color": "#1A1918" },
                    { "name": "Helm", "color": "#277A9F" },
                    { "name": "Terraform", "color": "#5C4EE5" },
                    { "name": "GitHub Actions", "color": "#FFFFFF" },
                    { "name": "Azure DevOps", "color": "#0078D7" },
                    { "name": "Nginx", "color": "#269539" },
                    { "name": "IIS", "color": "#5A25A2" },
                    { "name": "Bash", "color": "#4EAA25" },
                    { "name": "Powershell", "color": "#5391FE" },
                    { "name": "Bitbucket CI", "color": "#205081" }
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
                    { "name": "C#", "color": "#68217A" },
                    { "name": "Azure", "color": "#0089D6" },
                    { "name": "Azure DevOps", "color": "#0078D7" },
                    { "name": "Docker", "color": "#2496ED" },
                    { "name": "Kubernetes", "color": "#326CE5" },
                    { "name": "Azure Bicep", "color": "#00AEEF" },
                    { "name": "Nginx", "color": "#269539" },
                    { "name": "SQL Server", "color": "#CC2927" },
                    { "name": "Powershell", "color": "#5391FE" }
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
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg",
            level: 1.0
        },
        {
            name: "Azure",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg",
            level: 0.8
        },
        {
            name: "Google Cloud",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg",
            level: 0.3
        },
        {
            name: "Docker",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
            level: 1.0
        },
        {
            name: "Kubernetes",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kubernetes.svg",
            level: 0.9
        },
        {
            name: "Flux CD",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flux.svg",
            level: 0.8
        },
        {
            name: "Helm",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/helm.svg",
            level: 0.6
        },
        {
            name: "Docker Swarm",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
            level: 0.7
        },
        {
            name: "Terraform",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/terraform.svg",
            level: 0.8
        },
        {
            name: "Azure Bicep",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg",
            level: 0.6
        },
        {
            name: "Jenkins",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jenkins.svg",
            level: 0.35
        },
        {
            name: "Bitbucket CI",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bitbucket.svg",
            level: 0.4
        },
        {
            name: "GitHub Actions",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg",
            level: 0.9
        },
        {
            name: "Azure DevOps",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/azuredevops.svg",
            level: 1.0
        },
        {
            name: "Nginx",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nginx.svg",
            level: 0.8
        },
        {
            name: "IIS",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/internetexplorer.svg",
            level: 0.6
        },
        {
            name: "SQL Server",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftsqlserver.svg",
            level: 0.7
        },
        {
            name: "Mongo DB",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg",
            level: 0.7
        },
        {
            name: "C# .NET",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg",
            level: 0.55
        },
        {
            name: "Python",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",
            level: 0.8
        },
        {
            name: "Vue",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vuedotjs.svg",
            level: 0.01
        },
        {
            name: "Flutter",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flutter.svg",
            level: 0.2
        },
        {
            name: "Bash",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gnubash.svg",
            level: 0.8
        },
        {
            name: "Powershell",
            iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powershell.svg",
            level: 0.60
        }
    ],
    projects: [
        {
            name: 'Migration from ompremise to cloud',
            description: 'Migration from on-premise infrastructure to cloud',
            imageUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/progress.svg',
            steps:[
                {
                    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg',
                    description: 'Azure AKS'
                },
                {
                    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/azure-original.svg',
                    description: 'Azure Arc'
                },
                {
                    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/terraform-original.svg',
                    description: 'Terraform'
                },
                {
                    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/azure-original.svg',
                    description: 'Azure Bicep'
                }

            ]
        },
        {
            name: 'Kubernetes introduction to FluxCD',
            description: 'Introduction to Kubernetes and FluxCD',
            imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
            steps:[
                {
                    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
                    description: 'Kubernetes'
                },
                {
                    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flux/flux-original.svg',
                    description: 'Flux CD'
                }
            ]
        },
        {
            name: 'Serverless functions',
            description: 'Using lambda functions to solve critical issues',
            imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            steps:[
                {
                    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                    description: 'Python'
                },
                {
                    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg',
                    description: 'AWS'
                }
            ]
        },
        {
            name: 'Portfolio',
            description: 'My personal portfolio',
            imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            steps:[
                {
                    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/vuedotjs.svg',
                    description: 'Create a Vue App'
                },
                {
                    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/github.svg',
                    description: 'Create a GitHub Repository'
                },
                {
                    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/githubactions.svg',
                    description: 'Push it with actions'
                },
                {
                    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/githubpages.svg',
                    description: 'Serve it with Github Pages'
                }
            ]

        }
        ]
};