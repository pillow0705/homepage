export interface NewsItem {
  date: string;
  content: string;
}

export interface Publication {
  title: string;
  authors: string[];
  conference: string;
  year: string;
  pdfUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  bibtex?: string;
  image?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  rank?: string;
  coursework?: { name: string; grade?: string; highlight?: boolean }[];
}

export interface Experience {
  role: string;
  institution: string;
  advisor?: string;
  period: string;
  description: string[];
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ProfileData {
    name: string;
    title: string;
    university: string;
    email: string;
    github: string;
    twitter: string;
    scholar: string;
    location: string;
    about: string;
    news: NewsItem[];
    education: Education[];
    experience: Experience[];
    awards: Award[];
    skills: Skill[];
    publications: Publication[];
    projects: Project[];
    labels: {
        news: string;
        publications: string;
        projects: string;
        education: string;
        experience: string;
        awards: string;
        skills: string;
        downloadCV: string;
        contactMe: string;
        viewAll: string;
        coursework: string;
        gpa: string;
        rank: string;
        advisedBy: string;
    }
}

const profileEn: ProfileData = {
  name: "Yuanhang Chang",
  title: "Undergraduate Student",
  university: "University of Science and Technology of China (USTC)",
  email: "cyhang@mail.ustc.edu.cn",
  github: "https://github.com/pillow0705",
  twitter: "",
  scholar: "",
  location: "Hefei, Anhui, China",
  about: `
    I am a junior undergraduate student at the **School of Gifted Young**, **University of Science and Technology of China (USTC)**, majoring in **Mathematics and Applied Mathematics** with a minor in **Computer Science**.
    
    My academic interests are broad and I am currently in a phase of active exploration. On one hand, I am deeply attracted to **Pure Mathematics**, particularly **Analysis** and **Statistics**. On the other hand, I am fascinated by **Artificial Intelligence**, including **Machine Learning**, **Large Language Models (LLMs)**, **Neural Networks**, and **Algorithms**.
    
    I am looking for research opportunities that allow me to leverage my mathematical background to explore these fields further. I plan to apply for **Summer Research internships in 2026** and **PhD positions in Fall 2027**.
  `,
  news: [
    { date: "Dec 2025", content: "Started a Reinforcement Learning training project for a Tank Turmoil game." },
    { date: "Feb 2025", content: "Started leading the research on **PG-VE-MoE** (Pareto-Guided Virtual Expert MoE)." },
    { date: "Fall 2024", content: "Selected for the **Xinhe Scholar** elite research program." },
    { date: "Summer 2024", content: "Research Intern at the **Institute of Modern Physics, CAS**." },
    { date: "2024", content: "Won **Second Prize** in Chinese Mathematics Competitions (Anhui Province)." },
  ],
  education: [
    {
      school: "University of Science and Technology of China (USTC)",
      degree: "B.S. in Mathematics and Applied Mathematics (Minor in CS)",
      period: "Sept. 2023 – Present",
      gpa: "3.75 / 4.3",
      rank: "20% (School of Gifted Young)",
      coursework: [
        { name: "Mathematical Analysis B1", grade: "88/100", highlight: true },
        { name: "Mathematical Analysis B2", grade: "85/100", highlight: true },
        { name: "Mathematical Analysis B3", grade: "86/100", highlight: true },
        { name: "Real Analysis", grade: "92/100", highlight: true },
        { name: "Complex Analysis", grade: "93/100", highlight: true },
        { name: "Advanced Real Analysis", grade: "Ongoing", highlight: true },
        { name: "Functional Analysis", grade: "Ongoing", highlight: true },
        { name: "Linear Algebra B1", grade: "92/100", highlight: true },
        { name: "Linear Algebra B2", grade: "92/100", highlight: true },
        { name: "Algebraic Structures", grade: "91/100", highlight: true },
        { name: "Introduction to Differential Equations", grade: "98/100", highlight: true },
        { name: "Differential Geometry", grade: "Ongoing", highlight: true },
        { name: "Probability Theory", grade: "91/100", highlight: true },
        { name: "Mathematical Statistics", grade: "Upcoming", highlight: true },
        { name: "Mechanics A", grade: "93/100", highlight: true },
        { name: "Atomic Physics B", grade: "92/100", highlight: true },
        { name: "Computer Programming B", grade: "87/100", highlight: true },
        { name: "Data Structures & Algorithms", highlight: true },
        { name: "Machine Learning A", grade: "Upcoming", highlight: true },
        { name: "Deep Learning Practice", grade: "Upcoming", highlight: true },
        { name: "Artificial Intelligence Practice", grade: "Upcoming", highlight: true },
        { name: "Software Engineering Practice", highlight: true }
      ]
    }
  ],
  experience: [
    {
      role: "Research Scholar (Xinhe Scholar Program)",
      institution: "University of Science and Technology of China",
      advisor: "Prof. Jie Wang",
      period: "Fall 2025 – Present",
      description: [
        "Participating in the elite 'Xinhe Scholar' program, focusing on **LLM Post-training** and **Reinforcement Learning with Verifiable Rewards (RLVR)**.",
        "Investigating **Reasoning Models** and addressing the 'collapse of capability boundary' in On-Policy RL using the LUFFY framework.",
        "Exploring data-efficient alignment strategies and exploration in sparse reward environments."
      ]
    },
    {
      role: "Research Assistant",
      institution: "Hong Kong University of Science and Technology",
      advisor: "Prof. Zimu Zhu",
      period: "Summer 2025",
      description: [
        "Investigated Deep Galerkin Method (DGM) for solving high-dimensional Stochastic PDEs.",
        "Applied DGM to stochastic control problems with Risk Aversion utility functions."
      ]
    },
    {
      role: "Research Intern",
      institution: "Institute of Modern Physics, CAS",
      period: "Summer 2025",
      description: [
        "Applied Machine Learning models to process experimental data from particle accelerators.",
        "Analyzed signal noise patterns using clustering and regression techniques."
      ]
    }
  ],
  awards: [
    { title: "Second Prize, Chinese Mathematics Competitions", issuer: "Anhui Province", year: "2024" },
    { title: "Bronze Award, Outstanding Student Scholarship", issuer: "USTC", year: "2024" },
    { title: "Bronze Award, Outstanding Student Scholarship", issuer: "USTC", year: "2025" },
    { title: "Rose Forging Scholarship", issuer: "USTC", year: "2025" },
    { title: "Outstanding Freshman Scholarship", issuer: "USTC", year: "2023" }
  ],
  skills: [
    { category: "Languages", items: ["Python (Proficient)", "C/C++", "JavaScript/Node.js", "LaTeX", "Mathematica"] },
    { category: "AI/ML", items: ["PyTorch", "Transformers", "Reinforcement Learning (RL)", "Physics-Informed NNs", "CrewAI", "ClaudeCode", "Gemini-CLI"] },
    { category: "Tools", items: ["Git", "Linux", "Docker", "SQL", "React"] }
  ],
  publications: [
    {
      title: "PG-VE-MoE: Pareto-Guided Virtual Expert Mixture of Experts",
      authors: ["Yuanhang Chang", "Collaborator"],
      conference: "Manuscript in Preparation",
      year: "2025",
      pdfUrl: "",
      codeUrl: "",
      bibtex: ""
    }
  ],
  projects: [
    {
      title: "Neural Network Polynomial Approximation",
      description: "Theoretical and experimental study on uniformly approximating neural networks with polynomial functions, bridging approximation theory and deep learning.",
      tags: ["Python", "Approximation Theory", "Deep Learning", "Research"],
      link: "https://github.com/pillow0705/nn-poly-approx",
    },
    {
      title: "RL-Based Sphere Packing with Graph Structure",
      description: "Reinforcement learning approach to binary sphere packing using tetrahedral graph representations, enabling coordinate-free optimization.",
      tags: ["Python", "Reinforcement Learning", "Graph Neural Networks", "Research"],
      link: "https://github.com/pillow0705/RL_for_particles_graph",
    },
    {
      title: "RL for Particle Packing",
      description: "Deep reinforcement learning agent for optimizing sphere packing density, formulated as a sequential decision-making problem.",
      tags: ["Python", "Reinforcement Learning", "Physics Simulation"],
      link: "https://github.com/pillow0705/RL_for_particles",
    },
    {
      title: "Homework Agent",
      description: "AI agent that accepts uploaded homework files and returns AI-generated LaTeX-formatted answers as compiled PDFs.",
      tags: ["Python", "AI Agent", "LaTeX", "Claude API"],
      link: "https://github.com/pillow0705/homework-agent",
    },
    {
      title: "Claude Cloud Rental Automation",
      description: "Automation scripts for using Claude Code to programmatically rent Tencent Cloud GPU servers and run ML experiments.",
      tags: ["Python", "Claude Code", "DevOps", "Cloud"],
      link: "https://github.com/pillow0705/claude-cloud-rental",
    },
    {
      title: "LLM Neural Perturbation",
      description: "Simulating human creative thinking by introducing controlled neural perturbations in large language models to study divergent reasoning.",
      tags: ["Python", "LLM", "Research", "Cognitive Science"],
      link: "https://github.com/pillow0705/llm-perturbation",
    },
    {
      title: "HMER: Handwritten Math Expression Recognition",
      description: "End-to-end deep learning pipeline for recognizing handwritten mathematical expressions and converting them to LaTeX.",
      tags: ["Python", "Computer Vision", "Deep Learning", "OCR"],
      link: "https://github.com/pillow0705/HMER_Project",
    },
    {
      title: "Gold Trading Deep Learning Framework",
      description: "Complete deep learning pipeline for gold price prediction and automated trading strategy generation.",
      tags: ["Python", "Deep Learning", "Finance", "Time Series"],
      link: "https://github.com/pillow0705/gold-trading-dl",
    },
    {
      title: "DQN Game AI",
      description: "Deep Q-Network implementation with experience replay and target networks for training game-playing agents.",
      tags: ["Python", "Reinforcement Learning", "DQN", "PyTorch"],
      link: "https://github.com/pillow0705/dqn-game-ai",
    },
  ],
  labels: {
      news: "News",
      publications: "Selected Publications",
      projects: "Projects",
      education: "Education",
      experience: "Experience",
      awards: "Honors & Awards",
      skills: "Skills",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      viewAll: "View All",
      coursework: "Key Coursework",
      gpa: "GPA",
      rank: "Rank",
      advisedBy: "Advised by"
  }
};

const profileCn: ProfileData = {
  name: "常远航",
  title: "本科生",
  university: "中国科学技术大学 (USTC)",
  email: "cyhang@mail.ustc.edu.cn",
  github: "https://github.com/pillow0705",
  twitter: "",
  scholar: "",
  location: "中国，安徽合肥",
  about: `
    我是**中国科学技术大学少年班学院**的大三本科生，主修**数学与应用数学**，辅修**计算机科学与技术**。
    
    我的学术兴趣广泛，目前正处于积极探索的阶段。一方面，我对**纯数学**研究（特别是**分析学**和**统计学**）抱有浓厚兴趣；另一方面，我也对**人工智能**领域充满热情，包括**机器学习**、**大语言模型 (LLM)**、**神经网络**以及**算法**设计。
    
    我希望能够结合扎实的数学背景，在这些领域进行更深入的探索与研究。我计划申请 **2026年的暑期科研实习** 以及 **2027年秋季入学的博士职位**。
  `,
  news: [
    { date: "2025年12月", content: "启动了一个坦克动荡强化学习训练项目。" },
    { date: "2025年2月", content: "开始主导关于 **PG-VE-MoE** (基于帕累托导向的虚拟专家 MoE) 的研究。" },
    { date: "2024年秋", content: "入选 **新荷学者** 精英科研计划。" },
    { date: "2024年夏", content: "在 **中国科学院近代物理研究所** 担任科研实习生。" },
    { date: "2024年", content: "获得 **全国大学生数学竞赛 (安徽赛区) 二等奖**。" },
  ],
  education: [
    {
      school: "中国科学技术大学 (USTC)",
      degree: "理学学士，数学与应用数学专业（辅修计算机科学）",
      period: "2023年9月 – 至今",
      gpa: "3.75 / 4.3",
      rank: "20% (少年班学院)",
      coursework: [
        { name: "数学分析 B1", grade: "88/100", highlight: true },
        { name: "数学分析 B2", grade: "85/100", highlight: true },
        { name: "数学分析 B3", grade: "86/100", highlight: true },
        { name: "实分析", grade: "92/100", highlight: true },
        { name: "复分析", grade: "93/100", highlight: true },
        { name: "高等实分析", grade: "在修", highlight: true },
        { name: "泛函分析", grade: "在修", highlight: true },
        { name: "线性代数 B1", grade: "92/100", highlight: true },
        { name: "线性代数 B2", grade: "92/100", highlight: true },
        { name: "代数结构", grade: "91/100", highlight: true },
        { name: "微分方程引论", grade: "98/100", highlight: true },
        { name: "微分几何", grade: "在修", highlight: true },
        { name: "概率论", grade: "91/100", highlight: true },
        { name: "数理统计", grade: "即将修读", highlight: true },
        { name: "力学 A", grade: "93/100", highlight: true },
        { name: "原子物理 B", grade: "92/100", highlight: true },
        { name: "计算机程序设计 B", grade: "87/100", highlight: true },
        { name: "数据结构与算法", highlight: true },
        { name: "机器学习 A", grade: "即将修读", highlight: true },
        { name: "深度学习实践", grade: "即将修读", highlight: true },
        { name: "人工智能实践", grade: "即将修读", highlight: true },
        { name: "软件工程实践", highlight: true }
      ]
    }
  ],
  experience: [
    {
      role: "课题研究员 (新荷学者项目)",
      institution: "中国科学技术大学",
      advisor: "王杰 教授",
      period: "2025年秋 – 至今",
      description: [
        "入选精英科研计划“新荷学者”，核心研究方向为 **大语言模型后训练 (LLM Post-training)** 与 **带可验证奖励的强化学习 (RLVR)**。",
        "深入研究 **推理模型 (Reasoning Models)**，利用 LUFFY 框架解决 On-Policy RL 中的“能力边界崩溃”问题。",
        "探索稀疏奖励环境下的数据高效对齐策略与探索机制。"
      ]
    },
        {
          role: "研究助理",
          institution: "香港科技大学",
          advisor: "朱子木 教授",
          period: "2025年 暑期",
          description: [
            "研究利用深度伽辽金方法 (DGM) 求解高维随机偏微分方程 (Stochastic PDEs)。",
            "将 DGM 应用于涉及风险厌恶效用函数的随机控制问题。"
          ]
        },
        {
          role: "科研实习生",
          institution: "中国科学院近代物理研究所",
          period: "2025年 暑期",
          description: [
            "应用机器学习模型处理粒子加速器的实验数据。",
            "使用聚类和回归技术分析信号噪声模式。"
          ]
        }
  ],
  awards: [
    { title: "二等奖, 全国大学生数学竞赛", issuer: "安徽赛区", year: "2024" },
    { title: "铜奖, 优秀学生奖学金", issuer: "中国科学技术大学", year: "2024" },
    { title: "铜奖, 优秀学生奖学金", issuer: "中国科学技术大学", year: "2025" },
    { title: "蔷薇奋进奖学金", issuer: "中国科学技术大学", year: "2025" },
    { title: "优秀新生奖学金", issuer: "中国科学技术大学", year: "2023" }
  ],
  skills: [
    { category: "编程语言", items: ["Python (熟练)", "C/C++", "JavaScript/Node.js", "LaTeX", "Mathematica"] },
    { category: "AI/机器学习", items: ["PyTorch", "Transformers", "Reinforcement Learning (RL)", "Physics-Informed NNs", "CrewAI", "ClaudeCode", "Gemini-CLI"] },
    { category: "工具", items: ["Git", "Linux", "Docker", "SQL", "React"] }
  ],
  publications: [
    {
      title: "PG-VE-MoE: Pareto-Guided Virtual Expert Mixture of Experts",
      authors: ["Yuanhang Chang", "Collaborator"],
      conference: "Manuscript in Preparation",
      year: "2025",
      pdfUrl: "",
      codeUrl: "",
      bibtex: ""
    }
  ],
  projects: [
    {
      title: "神经网络多项式逼近",
      description: "理论与实验研究：用多项式函数一致逼近神经网络，连接逼近论与深度学习。",
      tags: ["Python", "逼近论", "深度学习", "理论研究"],
      link: "https://github.com/pillow0705/nn-poly-approx",
    },
    {
      title: "基于图结构的 RL 球填充",
      description: "利用四面体图结构表示球的位置关系，通过强化学习实现坐标无关的二元球填充优化。",
      tags: ["Python", "强化学习", "图神经网络", "理论研究"],
      link: "https://github.com/pillow0705/RL_for_particles_graph",
    },
    {
      title: "强化学习粒子填充",
      description: "将球填充密度优化建模为序列决策问题，使用深度强化学习智能体求解。",
      tags: ["Python", "强化学习", "物理仿真"],
      link: "https://github.com/pillow0705/RL_for_particles",
    },
    {
      title: "作业 AI Agent",
      description: "接收上传的作业文件，由 AI 自动生成 LaTeX 格式答案并编译为 PDF 返回。",
      tags: ["Python", "AI Agent", "LaTeX", "Claude API"],
      link: "https://github.com/pillow0705/homework-agent",
    },
    {
      title: "Claude 云服务器自动化租赁",
      description: "利用 Claude Code 自动化腾讯云 GPU 服务器的租赁与实验运行流程。",
      tags: ["Python", "Claude Code", "运维", "云计算"],
      link: "https://github.com/pillow0705/claude-cloud-rental",
    },
    {
      title: "LLM 神经扰动研究",
      description: "通过向大语言模型引入可控神经扰动，模拟人类发散性思维，研究创造力的计算机制。",
      tags: ["Python", "大语言模型", "理论研究", "认知科学"],
      link: "https://github.com/pillow0705/llm-perturbation",
    },
    {
      title: "手写数学公式识别 (HMER)",
      description: "端到端深度学习流水线，将手写数学公式识别并转换为 LaTeX 代码。",
      tags: ["Python", "计算机视觉", "深度学习", "OCR"],
      link: "https://github.com/pillow0705/HMER_Project",
    },
    {
      title: "黄金交易深度学习框架",
      description: "完整的深度学习流水线，涵盖黄金价格预测与自动化交易策略生成。",
      tags: ["Python", "深度学习", "金融", "时间序列"],
      link: "https://github.com/pillow0705/gold-trading-dl",
    },
    {
      title: "DQN 游戏 AI",
      description: "基于经验回放与目标网络的深度 Q 网络实现，用于训练游戏智能体。",
      tags: ["Python", "强化学习", "DQN", "PyTorch"],
      link: "https://github.com/pillow0705/dqn-game-ai",
    },
  ],
  labels: {
      news: "最新动态",
      publications: "精选论文",
      projects: "项目经历",
      education: "教育背景",
      experience: "科研/工作经历",
      awards: "荣誉奖项",
      skills: "技能专长",
      downloadCV: "下载简历",
      contactMe: "联系我",
      viewAll: "查看全部",
      coursework: "核心课程",
      gpa: "GPA",
      rank: "排名",
      advisedBy: "导师"
  }
};

export const profiles = {
  en: profileEn,
  cn: profileCn
};

// Default export for backward compatibility if needed, but we will switch to using Context
export const profile = profileEn; 

