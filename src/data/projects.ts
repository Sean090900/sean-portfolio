// import headshot from '../assets/Headshot.png'

export interface Project {
    // image: string;
    subject: string;
    types: string[]; 
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    accent: string;
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
        subtitle: "Johns Hopkins University | M.S. AI",
        description: "An end-to-end fraud detection pipeline built and deployed as a REST API. Applied SMOTE for synthetic minority oversampling and hard-negative mining to improve model recall on highly imbalanced transaction data. Deployed with health checks and structured logging.", 
        tags: ["Python", "Machine Learning", "scikit-learn", "SMOTE", "Hard-Negative Mining", "Classification", "Flask", "REST APIs", "Docker"],
        accent: 'var(--accent-a)',
    },
    {
        // image: headshot,
        subject: "Data Engineeing",
        types: ["Industry", "Production ETL Pipeline"],
        title: "Scientific Plate Assay Data Pipeline",
        subtitle: "Recombia Biosciences",
        description: "A Python automation tool that ingests raw instrument output, validates experimental metadata, and registers results into internal data infrastructure (Benchling) via authenticated REST APIs. Designed to reduce manual data entry and improve traceability across analytical experiments.",
        tags: ["Python", "Scientific Data Pipelines", "ETL Pipelines",  "Automation", "AWS", "Benchling API", "Error Handling"],
        accent: 'var(--accent-c)'
    },
    {
        // image: headshot,
        subject: "Machine Learning",
        types: ["Coursework", "Retrieval-Augmented Generation"],
        title: "Mistral-Based RAG Pipeline",
        subtitle: "Johns Hopkins University | M.S. AI",
        description: "",
        tags: ["Python", "RAG", "Mistral API", "Vector Indexing (FAISS)", "Pandas", "scikit-learn", "Flask", "REST APIs", "Docker"],
        accent: 'var(--accent-a)',
    },
    {
        // image: headshot,
        subject: "Bioinformatics",
        types: ["Industry", "Guide Plasmid Design"],
        title: "Automated CRISPR gRNA Plasmid Design Pipeline",
        subtitle: "Recombia Biosciences",
        description: "A Python-based system that automates the design of CRISPR guide RNA constructs. Given a target gene or genomic region, the tool identifies candidate guide sequences, scores them against design criteria, assembles plasmid construct designs, and registers results in the lab database (Benchling).",
        tags: ["Python", "CRISPR", "Automation", "Pandas", "Jupyter Notebooks"],
        accent: "var(--accent-b)",
    },
    {
        // image: headshot,
        subject: "Data Strcutures & Algorithms",
        types: ["Coursework", "Binary Trees"],
        title: "Huffman Encoder",
        subtitle: "Johns Hopkins University | M.S. AI",
        description: "A modular Python implementation of the Huffman coding algorithm. Encodes and decodes arbitrary text or files into compact binary representations using frequency-based variable-length codes. Built around clean OOP design with clear separation between tree construction, encoding, and decoding. Builds a min-heap priority queue from character frequency analysis. Recursively constructs a Huffman tree and derives prefix-free binary codes. Encodes input to binary and decodes back to the original string without loss.",
        tags: ["Python", "OOP", "Recursion", "Data Compression"],
        accent: "var(--accent-d)",
    },
    {
        // image: headshot,
        subject: "Data Strcutures & Algorithms",
        types: ["Coursework", "Sorting Algorithms"],
        title: "Sorting Algorithm Comparator",
        subtitle: "Johns Hopkins University | M.S. AI",
        description: "A command-line utility for running and benchmarking multiple sorting algorithms side-by-side on the same dataset. Built as a learning and analysis tool for understanding algorithmic complexity trade-offs in practice. Supports insertion sort, merge sort, and additional configurable methods. Outputs per-algorithm runtime and comparison metrics. Designed to be extensible for adding new sorting strategies.",
        tags: ["Python", "CLI Applications", "File I/O", "Complexity Analysis"],
        accent: "var(--accent-d)",
    },

];
