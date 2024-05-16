export interface Campaign {
    scenarios: Scenario[]
}

interface Scenario{
    imageurl: string;
    title: string;
    text: string;
}