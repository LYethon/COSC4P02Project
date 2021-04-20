SET IDENTITY_INSERT [dbo].[Students] ON
INSERT INTO [dbo].[Students] ([Id], [FirstName], [LastName], [Email], [Password], [Schedule], [CurrentYear]) VALUES (1, N'David', N'Saldana', N'ds16vx@brocku.ca', N'abc', N'{"Courses":
[
[
{
"CID": 1,
"Name": "Introduction to Computer Science",
"Code": "1P02",
"Description": "Foundations of Computer Science and computer programming in a high-level language (normally Java). Topics include computer fundamentals, representation of information, problem solving and software development, programming language syntax and semantics, methods, input/output, control structures and data types.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 2,
"Name": "Introduction to Data Structures",
"Code": "1P03",
"Description": "Programming and problem solving in a high-level programming language (normally Java). Data structures including arrays and linked-lists. Modularity, abstraction and abstract data types including stacks, queues and lists. Introduction to searching and sorting, recursion, algorithm analysis and object-orientation.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 1,
"Context": "SCIENCE"
},
{
"CID": 3,
"Name": "Integrity and Literacy in the Information Age",
"Code": "1P50",
"Description": "Issues in use of information technology including historic and social perspectives; legal, ethical and moral issues; intellectual property, licensing and copyright; privacy and freedom of expression; professional conduct and information literacy.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": "APCO",
"AlternativeSubject2": "IASC",
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 44,
"Name": "Mathematical Reasoning",
"Code": "1P66",
"Description": "Introduction to mathematical reasoning, logic and proofs including mathematical induction. Basics of set theory.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 45,
"Name": "Mathematics for Computer Science",
"Code": "1P67",
"Description": "Development and analysis of algorithms, complexity of algorithms, recursion solving recurrence relations and relations and functions.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 44,
"Context": "SCIENCE"
}
],
[
{
"CID": 4,
"Name": "Advanced Data Structures",
"Code": "2P03",
"Description": "Implementation and use of advanced data structures including trees, graphs, hash tables and advanced list structures, sorting and searching, recursion and traversals. Analysis of algorithms.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 2,
"Context": "SCIENCE"
},
{
"CID": 5,
"Name": "Programming Languages",
"Code": "2P05",
"Description": "Fundamental concepts of programming languages including syntax, semantics, program translation, virtual machines, control, data types, multi-threading, exception handling and abstraction mechanisms. Introduction to programming paradigms including imperative, applicative, logic and object-oriented.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null, 
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 6,
"Name": "Introduction to Computer Architecture",
"Code": "2P12",
"Description": "Evolution of digital computer. Computer organization including functional units, instruction cycle, control, buses and memory. Instruction types and memory access, instruction sequencing and call/return. Basic assembly language programming.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null, 
"Prerequisites": 2,
"Context": "SCIENCE"
},
{
"CID": 7,
"Name": "Computer Systems",
"Code": "2P13",
"Description": "Operating systems and networking. Resource sharing including file, processor, I/O and memory management. Concurrency including: context switching, interprocess communication, and synchronization. Protection and security including encryption. Distributed systems and networking including: ISO model and packet routing.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 43,
"Name": "Applied Linear Algebra",
"Code": "1P12",
"Description": "Systems of linear equations with applications. Matrix algebra. Determinants. Vector geometry in R2 and R3 dot product, norm and projections, cross product, lines and planes. Complex numbers. Euclidean n-space. Linear transformations from Rn to Rm. Focus on applications of linear algebra to sciences and integrated use of a computer algebra system.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 46,
"Name": "Practical Statistics",
"Code": "1P98",
"Description": "Descriptive statistics; probability of events; counting rules; discrete and continuous probability distributions: binomial, Poisson and normal distributions; Central Limit Theorem; confidence intervals and hypothesis testing; analysis of variance; contingency tables; correlation and regression; emphasis on real-world applications throughout; use of statistical computer software.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
}
],
[
{
"CID": 11,
"Name": "Algorithms",
"Code": "3P03",
"Description": "Design and analysis of computer algorithms. Topics include asymptotic notations, solving recurrences, order statistics, general algorithm design techniques such as divide-and-conquer, greedy algorithms, dynamic programming, backtracking and branch-and-bound. Graph and string algorithms. Introduction to NP-Completeness and complexity theory.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 12,
"Name": "Introduction to Database Systems",
"Code": "3P32",
"Description": "Fundamental database concepts: specification, design and applications; various models including the relational model; normal forms, efficiency considerations, queries using SQL, database administration and security. Practical experience (normally ORACLE) in a group project.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 13,
"Name": "Introduction to Artificial Intelligence",
"Code": "3P71",
"Description": "Historic and philosophical foundations of AI; knowledge representation and reasoning; problem spaces; blind and heuristic search; adversarial search in game playing; machine learning; social and ethical considerations.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 41,
"Name": "Applied Calculus I",
"Code": "1P05",
"Description": "Differential calculus emphasizing problem solving, calculation and applications. Precalculus topics, limits and asymptotic analysis, continuity, derivatives and differentiability, implicit differentiation, linear approximation. Applications: slope, rates of change, maximum and minimum, convexity, curve sketching, L''Hospital''s rule. Antiderivatives, integrals, fundamental theorem of calculus, integration by substitution. Use of a computer algebra system.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 42,
"Name": "Applied Calculus II",
"Code": "1P06",
"Description": "Integral calculus emphasizing problem solving, calculations and applications. Further techniques of integration. Areas between curves, volumes, arc length and probabilities. 1st order differential equations. Sequences and series: convergence tests, Taylor and Maclaurin series and applications. Use of computer algebra system.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 41,
"Context": "SCIENCE"
}
],
[
{
"CID": 24,
"Name": "Software Engineering 1",
"Code": "4P01",
"Description": "Theory of software engineering. Topics include plan-driven development, Agile development, software requirements elicitation and presentation, verification of software correctness, redundancy, robustness, safety and security. Creation of robust software requirements document. Introduction to tools such as Git and Azure DevOps.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 25,
"Name": "Software Engineering 2",
"Code": "4P02",
"Description": "Application of software engineering. The development of a large-scale software engineering project in a competitive team setting, including creation of complete documentation for a working system.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 24,
"Context": "SCIENCE"
},
{
"CID": 31,
"Name": "Theory of Computation",
"Code": "4P61",
"Description": "Regular languages and finite state machines: deterministic and non-deterministic machines, Kleene''s theorem, the pumping lemma, Myhill-Nerode Theorem and decidable questions. Context-free languages: generation by context-free grammars and acceptance by pushdown automata, pumping lemma, closure properties, decidability. Turing machines: recursively enumerable languages, universal Turing machines, halting problem and other undecidable questions.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": "MATH",
"AlternativeSubject2": null,
"Prerequisites": 45,
"Context": "SCIENCE"
}
]
]
}', 1)
INSERT INTO [dbo].[Students] ([Id], [FirstName], [LastName], [Email], [Password], [Schedule], [CurrentYear]) VALUES (3, N'James', N'Zhao', N'jz16pt@brocku.ca', N'abc', N'{"Courses":
[
[
{
"CID": 1,
"Name": "Introduction to Computer Science",
"Code": "1P02",
"Description": "Foundations of Computer Science and computer programming in a high-level language (normally Java). Topics include computer fundamentals, representation of information, problem solving and software development, programming language syntax and semantics, methods, input/output, control structures and data types.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 2,
"Name": "Introduction to Data Structures",
"Code": "1P03",
"Description": "Programming and problem solving in a high-level programming language (normally Java). Data structures including arrays and linked-lists. Modularity, abstraction and abstract data types including stacks, queues and lists. Introduction to searching and sorting, recursion, algorithm analysis and object-orientation.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 1,
"Context": "SCIENCE"
},
{
"CID": 3,
"Name": "Integrity and Literacy in the Information Age",
"Code": "1P50",
"Description": "Issues in use of information technology including historic and social perspectives; legal, ethical and moral issues; intellectual property, licensing and copyright; privacy and freedom of expression; professional conduct and information literacy.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": "APCO",
"AlternativeSubject2": "IASC",
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 44,
"Name": "Mathematical Reasoning",
"Code": "1P66",
"Description": "Introduction to mathematical reasoning, logic and proofs including mathematical induction. Basics of set theory.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 45,
"Name": "Mathematics for Computer Science",
"Code": "1P67",
"Description": "Development and analysis of algorithms, complexity of algorithms, recursion solving recurrence relations and relations and functions.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 44,
"Context": "SCIENCE"
},
{
"CID": 138,
"Name": "Introduction to Astronomy I",
"Code": "1P01",
"Description": "Description of the appearance of the night sky, history of astronomy, light and telescopes, measuring the properties of stars, structure and functioning of the Sun.",
"CreditValue": 0.5,
"Subject": "ASTR",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 109,
"Name": "Introduction to Human Geography",
"Code": "1F90",
"Description": "Practical and problem-oriented examination of spatial patterns of human organization and their links with social, cultural, economic, political and ecological processes.",
"CreditValue": 1,
"Subject": "GEOG",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SOCIAL SCIENCES"
},
{
"CID": 51,
"Name": "Myths of the Greek and Roman Gods",
"Code": "1P95",
"Description": "Traditional story types: nature myths, ritual myths. Diffusion of myths in the ancient world. The creation, the succession in heaven and the individual gods. Functions of myth in ancient society. Modern theories of myth.",
"CreditValue": 0.5,
"Subject": "CLAS",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "HUMANITIES"
},
{
"CID": 52,
"Name": "Myths of the Heroic Age",
"Code": "1P97",
"Description": "Traditional story types: folktale, legend. Concept of a Heroic Age, centres and cycles of legend, pseudo-history. Response to Greek and Roman myths through the ages.",
"CreditValue": 0.5,
"Subject": "CLAS",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "HUMANITIES"
}
],
[
{
"CID": 4,
"Name": "Advanced Data Structures",
"Code": "2P03",
"Description": "Implementation and use of advanced data structures including trees, graphs, hash tables and advanced list structures, sorting and searching, recursion and traversals. Analysis of algorithms.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 2,
"Context": "SCIENCE"
},
{
"CID": 5,
"Name": "Programming Languages",
"Code": "2P05",
"Description": "Fundamental concepts of programming languages including syntax, semantics, program translation, virtual machines, control, data types, multi-threading, exception handling and abstraction mechanisms. Introduction to programming paradigms including imperative, applicative, logic and object-oriented.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null, 
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 6,
"Name": "Introduction to Computer Architecture",
"Code": "2P12",
"Description": "Evolution of digital computer. Computer organization including functional units, instruction cycle, control, buses and memory. Instruction types and memory access, instruction sequencing and call/return. Basic assembly language programming.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null, 
"Prerequisites": 2,
"Context": "SCIENCE"
},
{
"CID": 7,
"Name": "Computer Systems",
"Code": "2P13",
"Description": "Operating systems and networking. Resource sharing including file, processor, I/O and memory management. Concurrency including: context switching, interprocess communication, and synchronization. Protection and security including encryption. Distributed systems and networking including: ISO model and packet routing.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 8,
"Name": "Internet Technologies",
"Code": "2P89",
"Description": "Concepts and techniques required for building and maintaining advanced interactive Web sites. Topics include XML and SGML, database connectivity and forms handling, basic animation, graphics optimization for the Web, scripting, advanced searching, Web design for accessibility.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 43,
"Name": "Applied Linear Algebra",
"Code": "1P12",
"Description": "Systems of linear equations with applications. Matrix algebra. Determinants. Vector geometry in R2 and R3 dot product, norm and projections, cross product, lines and planes. Complex numbers. Euclidean n-space. Linear transformations from Rn to Rm. Focus on applications of linear algebra to sciences and integrated use of a computer algebra system.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 46,
"Name": "Practical Statistics",
"Code": "1P98",
"Description": "Descriptive statistics; probability of events; counting rules; discrete and continuous probability distributions: binomial, Poisson and normal distributions; Central Limit Theorem; confidence intervals and hypothesis testing; analysis of variance; contingency tables; correlation and regression; emphasis on real-world applications throughout; use of statistical computer software.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 132,
"Name": "Foundations for Community Engagement",
"Code": "2F60",
"Description": "Interdisciplinary examination of philosophies, social histories and politics of community service, combined with experiential learning and field trips in community settings, and practices of self-reflection on community engagement.",
"CreditValue": 1,
"Subject": "SOCI",
"AlternativeSubject1": "CANA",
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SOCIAL SCIENCES"
},
{
"CID": 136,
"Name": "Classic and Contemporary Discourses in Women''''s and Gender Studies",
"Code": "2P00",
"Description": "Issues-based approach to the gender-intersected character of society and culture within a variety of feminist theoretical frameworks.",
"CreditValue": 0.5,
"Subject": "WGST",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SOCIAL SCIENCES"
}
],
[
{
"CID": 11,
"Name": "Algorithms",
"Code": "3P03",
"Description": "Design and analysis of computer algorithms. Topics include asymptotic notations, solving recurrences, order statistics, general algorithm design techniques such as divide-and-conquer, greedy algorithms, dynamic programming, backtracking and branch-and-bound. Graph and string algorithms. Introduction to NP-Completeness and complexity theory.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 12,
"Name": "Introduction to Database Systems",
"Code": "3P32",
"Description": "Fundamental database concepts: specification, design and applications; various models including the relational model; normal forms, efficiency considerations, queries using SQL, database administration and security. Practical experience (normally ORACLE) in a group project.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 13,
"Name": "Introduction to Artificial Intelligence",
"Code": "3P71",
"Description": "Historic and philosophical foundations of AI; knowledge representation and reasoning; problem spaces; blind and heuristic search; adversarial search in game playing; machine learning; social and ethical considerations.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 41,
"Name": "Applied Calculus I",
"Code": "1P05",
"Description": "Differential calculus emphasizing problem solving, calculation and applications. Precalculus topics, limits and asymptotic analysis, continuity, derivatives and differentiability, implicit differentiation, linear approximation. Applications: slope, rates of change, maximum and minimum, convexity, curve sketching, L''''Hospital''''s rule. Antiderivatives, integrals, fundamental theorem of calculus, integration by substitution. Use of a computer algebra system.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 42,
"Name": "Applied Calculus II",
"Code": "1P06",
"Description": "Integral calculus emphasizing problem solving, calculations and applications. Further techniques of integration. Areas between curves, volumes, arc length and probabilities. 1st order differential equations. Sequences and series: convergence tests, Taylor and Maclaurin series and applications. Use of computer algebra system.",
"CreditValue": 0.5,
"Subject": "MATH",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 41,
"Context": "SCIENCE"
},
{
"CID": 9,
"Name": "Programming in C++ with Applications",
"Code": "2P95",
"Description": "C++ as a second language. Basic language structure, data structures, libraries for application. Introduction to object-orientation and UNIX commands.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 17,
"Name": "Introduction to Human Computer Interaction",
"Code": "3P94",
"Description": "Human factors in the design and support of computing systems. Design methodologies such as GOMS, TAGs and Task Analysis. Design principles relating to various interaction paradigms.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": "APCO",
"AlternativeSubject2": "IASC",
"Prerequisites": null,
"Context": "SCIENCE"
},
{
"CID": 18,
"Name": "Mobile Computing",
"Code": "3P97",
"Description": "Overview of mobile applications, technologies and communication. Common paradigms in mobile computing. Application frameworks and application development. Interaction styles for user interface.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 7,
"Context": "SCIENCE"
},
{
"CID": 84,
"Name": "Intermediate Italian",
"Code": "1F90",
"Description": "Review of basic grammar; composition and oral practice. Discussions based on cultural topics, cities and the art of Italy.",
"CreditValue": 1,
"Subject": "ITAL",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "HUMANITIES"
}
],
[
{
"CID": 24,
"Name": "Software Engineering 1",
"Code": "4P01",
"Description": "Theory of software engineering. Topics include plan-driven development, Agile development, software requirements elicitation and presentation, verification of software correctness, redundancy, robustness, safety and security. Creation of robust software requirements document. Introduction to tools such as Git and Azure DevOps.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 25,
"Name": "Software Engineering 2",
"Code": "4P02",
"Description": "Application of software engineering. The development of a large-scale software engineering project in a competitive team setting, including creation of complete documentation for a working system.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 24,
"Context": "SCIENCE"
},
{
"CID": 31,
"Name": "Theory of Computation",
"Code": "4P61",
"Description": "Regular languages and finite state machines: deterministic and non-deterministic machines, Kleene''''s theorem, the pumping lemma, Myhill-Nerode Theorem and decidable questions. Context-free languages: generation by context-free grammars and acceptance by pushdown automata, pumping lemma, closure properties, decidability. Turing machines: recursively enumerable languages, universal Turing machines, halting problem and other undecidable questions.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": "MATH",
"AlternativeSubject2": null,
"Prerequisites": 45,
"Context": "SCIENCE"
},
{
"CID": 34,
"Name": "Artificial Neural Networks",
"Code": "4P80",
"Description": "Practical problem solving using artificial neural networks. Supervised learning, single- and multilayer feed-forward networks and backpropagation and refinements; recurrent neural networks; Hopfield networks and Boltzmann machines. Unsupervised learning, competitive learning, Kohonen map and self-organizing feature maps.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 13,
"Context": "SCIENCE"
},
{
"CID": 29,
"Name": "Functional Programming",
"Code": "4P41",
"Description": "Introduction to functional programming using the languages Haskell and SML. Topics include all data types, type inference, pattern-matching, recursion, polymorphism, higher-order functions, lazy vs eager evaluation, modules and monads.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 13,
"Context": "SCIENCE"
},
{
"CID": 19,
"Name": "Computer Graphics",
"Code": "3P98",
"Description": "Topics include 2-D and 3-D graphics, curve and surface fitting, light and colour models, real time interfaces, animation and hardware issues (knowledge of C assumed).",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 4,
"Context": "SCIENCE"
},
{
"CID": 36,
"Name": "Genetic Programming",
"Code": "4P82",
"Description": "Synthesis of computer programs using evolutionary computation. Different representations, including tree, linear, grammatical. Theoretical analyses, including the effects of operators, representations and fitness landscapes. Practical applications in problem solving, decision making, classification, computer vision and design.",
"CreditValue": 0.5,
"Subject": "COSC",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": 13,
"Context": "SCIENCE"
},
{
"CID": 119,
"Name": "New Media Literacy",
"Code": "2F00",
"Description": "Practical training in a repertoire of skills and tools essential to functioning in new media environments, and critical analytical training in key issues and theories related to the contemporary information age.",
"CreditValue": 1,
"Subject": "PCUL",
"AlternativeSubject1": "COMM",
"AlternativeSubject2": "FILM",
"Prerequisites": null,
"Context": "SOCIAL SCIENCES"
},
{
"CID": 107,
"Name": "Principles of Microeconomics",
"Code": "1P91",
"Description": "Introduction to microeconomics. Topics include nature of economics, price system, demand, production and cost, markets and pricing, factor pricing and distribution of income.",
"CreditValue": 0.5,
"Subject": "ECON",
"AlternativeSubject1": null,
"AlternativeSubject2": null,
"Prerequisites": null,
"Context": "SOCIAL SCIENCES"
}
]
]
}', 4)
SET IDENTITY_INSERT [dbo].[Students] OFF
