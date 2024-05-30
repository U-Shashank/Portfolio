type Project = {
    name: string,
    tech: string[],
    collaborators? : string,
    description: string,
    note?: string,
    code: string,
    link: string,
    video?: string,
    image: string
}

const projects: Project[] = [
    {   
        name: "SwiftCart",
        description: "Fullstack e-commerce website complete with user authentication and payment gateway. The website features a searchable and sortable product catalog, a shopping cart and a backend system for order management.",
        tech: ["React", "Tailwind CSS", "BrainTree", "Express", "RESTful-API", "MongoDB"], 
        code: "https://github.com/U-Shashank/Swift-Cart",
        link: "https://swift-cart-seven.vercel.app",
        image: "/projects/swiftcart.png",
        video: "https://drive.google.com/file/d/1SQkj6hICsdPVvpve6uqOsgkKy3xwdO0A/preview",
    },
    {   
        name: "Weather App",
        tech: ["React", "Tailwind CSS", "Open Weather API"], 
        description: "This simple application allows users to check the current weather conditions for a specific location. It is built using React and leverages a weather API to fetch real-time weather data.",
        code: "https://github.com/U-Shashank/Weather-App",
        link: "https://weather-app-nine-ebon-64.vercel.app",
        image: "/projects/weather.png"
    },
]

export default projects;