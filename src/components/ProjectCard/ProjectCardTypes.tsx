export type ProjectCardProps = {
    projects: Array<Project>
};

export type Project = {
    title: string
    imageUrl: string
    deploydPage: string
    description: string
    stack: Array<string>
    githubLink: string
}