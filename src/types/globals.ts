
// Post interface
export interface Post {
    id: number;
    title: string;
    content: string;
    slug: string;
    featuredImage?: {
        node: {
            id: number;
            sourceUrl: string;
            altText: string;
            mediaDetails: {
                width: number;
                height: number;
            };
        };
    };
}

export interface Employee {
    slug: string,
    title: string,
    id: string,
    employeeDetails: {
        email: string,
        firstname: string,
        lastname: string,
        phonenumber: string,
        role: string
    },
    featuredImage?: {
        node: {
            id: number;
            sourceUrl: string;
            altText: string;
            mediaDetails: {
                width: number;
                height: number;
            };
        };
    };
}

export interface Props {
    params: Promise<{ slug: string }>
}


interface SEOImage {
    altText: string;
    sourceUrl: string;
}

interface SEOData {
    canonical: string;
    cornerstone: boolean;
    focuskw: string;
    metaDesc: string;
    metaKeywords: string;
    metaRobotsNofollow: string;
    metaRobotsNoindex: string;
    opengraphAuthor: string;
    opengraphDescription: string;
    opengraphImage: SEOImage | null;
    opengraphUrl: string;
    opengraphType: string;
    opengraphTitle: string;
    opengraphSiteName: string;
    opengraphPublisher: string;
    twitterDescription: string;
    title: string;
    twitterImage: SEOImage | null;
    twitterTitle: string;
}

interface AuthorNode {
    lastName: string;
    name: string;
    firstName: string;
}

interface Author {
    node: AuthorNode;
}

export interface PageData {
    seo: SEOData;
    author: Author;
}