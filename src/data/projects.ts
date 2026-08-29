// import headshot from '../assets/Headshot.png'

export interface Project {
    // image: string;
    subject: string;
    types: string[]; 
    title: string;
    location: string;
    subtitle: string;
    // description: string;
    descriptionItems: string[];
    tags: string[];
    accent: string;
    buttonText: string;
    link: string;
}

export const projects: Project[] = [
    // {
    //     // image: headshot,
    //     subject: "",
    //     types: [""],
    //     title: "",
    //     subtitle: "",
    //     description: "",
    //     tags: [""],
    //     accent: "var()",
    // },
    {
        // image: headshot,
        subject: "Machine Learning",
        types: ["Coursework", "ML Classification"],
        title: "ML Fraud Detection System",
        location: "Johns Hopkins University | M.S. AI",
        subtitle: "ML-driven credit card fraud detection system with class imbalance handling",
        // description: "An end-to-end fraud detection pipeline built and deployed as a REST API. Applied SMOTE for synthetic minority oversampling and hard-negative mining to improve model recall on highly imbalanced transaction data. Deployed with health checks and structured logging.", 
        descriptionItems: [
            "An end-to-end fraud detection pipeline built and deployed as a REST API.",
            "Applied SMOTE for synthetic minority oversampling and hard-negative mining to improve model recall on highly imbalanced transaction data.",
            "Deployed with health checks and structured logging.", 
        ],
        tags: ["Python", "scikit-learn", "SMOTE", "Hard-Negative Mining", "Classification", "Flask", "REST APIs", "Docker"],
        accent: 'var(--accent-a)',
        buttonText: "See GitHub Repo",
        link: "",
    },
    {
        // image: headshot,
        subject: "Data Engineeing",
        types: ["Industry", "Production ETL Pipeline"],
        title: "Scientific Plate Assay Data Pipeline",
        location: "Recombia Biosciences",
        subtitle: "Automating analytical data registration for laboratory workflows",
        descriptionItems: [
            "A Python automation tool that ingests raw instrument output, validates experimental metadata, and registers results into internal data infrastructure (Benchling) via authenticated REST APIs.",
            "Designed to reduce manual data entry and improve traceability across analytical experiments.",
        ],
        tags: ["Python", "Scientific Data Pipelines", "ETL Pipelines",  "Automation", "AWS", "Benchling API", "Error Handling"],
        accent: 'var(--accent-c)',
        buttonText: "Code Availible on Request",
        link: "#contact",
    },
    {
        // image: headshot,
        subject: "Machine Learning",
        types: ["Coursework", "RAG"],
        title: "Mistral-Based RAG Pipeline",
        location: "Johns Hopkins University | M.S. AI",
        subtitle: "[TO DO...]",
        descriptionItems: [
            "TO DO..."
        ],
        tags: ["Python", "Mistral API", "Vector Indexing (FAISS)", "Pandas", "scikit-learn", "Flask", "REST APIs", "Docker"],
        accent: 'var(--accent-a)',
        buttonText: "See GitHub Repo",
        link: "",
    },
    {
        // image: headshot,
        subject: "Bioinformatics",
        types: ["Industry", "Guide Plasmid Design"],
        title: "Automated CRISPR gRNA Plasmid Design Pipeline",
        location: "Recombia Biosciences",
        subtitle: "Computational tool for CRISPR guide RNA design and plasmid assembly",
        descriptionItems: [
            "A Python-based system that automates the design of CRISPR guide RNA constructs.", 
            "Given a target gene or genomic region, the tool identifies candidate guide sequences, scores them against design criteria, assembles plasmid construct designs, and registers results in the lab database (Benchling).",
        ],
        tags: ["Python", "CRISPR", "Automation", "Pandas", "Jupyter Notebooks"],
        accent: "var(--accent-b)",
        buttonText: "Code Availible on Request",
        link: "#contact",
    },
    {
        // image: headshot,
        subject: "Data Structures & Algorithms",
        types: ["Coursework", "Binary Trees"],
        title: "Huffman Encoder",
        location: "Johns Hopkins University | M.S. AI",
        subtitle: "Lossless data compression via Huffman coding",
        descriptionItems: [
            "A modular Python implementation of the Huffman coding algorithm.",
            "Encodes and decodes arbitrary text or files into compact binary representations using frequency-based variable-length codes.",
            "Built around clean OOP design with clear separation between tree construction, encoding, and decoding.",
            "Builds a min-heap priority queue from character frequency analysis.",
            "Recursively constructs a Huffman tree and derives prefix-free binary codes.",
            "Encodes input to binary and decodes back to the original string without loss.",
        ],
        tags: ["Python", "OOP", "Recursion", "Data Compression"],
        accent: "var(--accent-d)",
        buttonText: "See GitHub Repo",
        link: "https://github.com/Sean090900/SeanPortfolioPublic/tree/main/huffman-encoder",
    },
    {
        // image: headshot,
        subject: "Data Structures & Algorithms",
        types: ["Coursework", "Sorting"],
        title: "Sorting Algorithm Comparator",
        location: "Johns Hopkins University | M.S. AI",
        subtitle: "CLI playground for comparing sorting algorithm performance",
        descriptionItems: [
            "A command-line utility for running and benchmarking multiple sorting algorithms side-by-side on the same dataset.",
            "Built as a learning and analysis tool for understanding algorithmic complexity trade-offs in practice.",
            "Supports insertion sort, merge sort, and additional configurable methods.",
            "Outputs per-algorithm runtime and comparison metrics.",
            "Designed to be extensible for adding new sorting strategies.",
        ],
        tags: ["Python", "CLI Applications", "File I/O", "Complexity Analysis"],
        accent: "var(--accent-d)",
        buttonText: "See GitHub Repo",
        link: "https://github.com/Sean090900/SeanPortfolioPublic/tree/main/multi-sorter",
    },
    {
        // image: headshot,
        subject: "Data Engineeing",
        types: ["Personal", "ETL Pipeline"],
        title: "Financial Data Pipeline",
        location: "",
        subtitle: "",
        descriptionItems: [
            
        ],
        tags: [""],
        accent: "var(--accent-c)",
        buttonText: "See GitHub Repo",
        link: "",
    },
    {
        // image: headshot,
        subject: "Machine Learning",
        types: ["Coursework", "Deep Learning"],
        title: "CNN Image Classifier",
        location: "",
        subtitle: "",
        descriptionItems: [
            
        ],
        tags: ["Python", "PyTorch"],
        accent: "var(--accent-a)",
        buttonText: "See GitHub Repo",
        link: "https://github.com/Sean090900/SeanPortfolioPublic/tree/main/CNN-image-classifier",
    },
    {
        // image: headshot,
        subject: "Mobile Apps",
        types: ["Personal", "Game Stat Tracking"],
        title: "Plunk!",
        location: "",
        subtitle: "",
        descriptionItems: [
            
        ],
        tags: [""],
        accent: "var()",
        buttonText: "View on App Store",
        link: "https://apps.apple.com/us/app/plunk/id6762314080",
    },
    {
        // image: headshot,
        subject: "Mobile Apps",
        types: ["Personal", "Habit Tracking"],
        title: "Cortex",
        location: "",
        subtitle: "",
        descriptionItems: [
            
        ],
        tags: [""],
        accent: "var()",
        buttonText: "View on App Store",
        link: "https://apps.apple.com/us/app/cortex-ai-habit-tracker/id6757570181",
    },
];
