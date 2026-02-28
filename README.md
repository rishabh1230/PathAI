# 🚀 AI-Driven Learning Path Engine

An **AI-powered learning path generator** that automatically builds **optimal concept learning sequences** from arbitrary educational content such as **GitHub repos, blogs, PDFs, and YouTube videos**.

Unlike traditional learning platforms, this system dynamically constructs a **concept dependency graph** and generates a **personalized learning order** using **NLP + embeddings + graph algorithms + LLM reasoning**.

---

## 📊 Current Status

**Overall Implementation: ~95% Complete**

### Implemented Modules

- ✅ Concept Extraction – **100%**
- ✅ Similarity Detection – **100%**
- ✅ Graph Builder – **90%**
- ✅ Path Generator – **90%**
- 🟡 Explainability Module – **Started**

---

## 🎯 Core Idea

Most learning platforms suffer from one of these problems:

| System | Limitation |
|-------|-----------|
| MOOC Platforms | Fixed course structure |
| YouTube | No learning order |
| Roadmaps | Static concept trees |
| Adaptive Learning | Closed content ecosystem |

This project solves the problem by building a **dynamic learning graph automatically.**

---

## ✨ Features

### 1️⃣ Automatic Concept Extraction

Extracts concepts from:

- GitHub repositories
- Blogs
- Documentation
- PDFs
- YouTube transcripts

Uses:

- NLP
- Keyword extraction
- LLM concept detection

---

### 2️⃣ Concept Similarity Detection

Finds related concepts using:

- Embeddings
- Cosine similarity
- Semantic clustering

Example:

```
React Hooks ≈ useState
Node.js Streams ≈ Readable Streams
```

---

### 3️⃣ Automatic Dependency Graph Builder

Builds a **Directed Acyclic Graph (DAG)** automatically.

Example:

```
Variables → Functions → Objects → Classes
```

Features:

- Cycle detection
- Cycle removal
- Edge scoring
- Graph pruning

---

### 4️⃣ Learning Path Generator

Generates optimal learning order using:

- Topological Sort
- Difficulty scoring
- Strategy-based ordering

Strategies:

- Easy-first
- Hard-first
- Balanced

Example output:

```
1. Variables
2. Functions
3. Objects
4. Classes
5. Async Programming
```

---

### 5️⃣ AI Difficulty Scoring

Difficulty is estimated using LLM reasoning.

Example:

| Concept | Difficulty |
|--------|------------|
| Variables | Easy |
| Recursion | Medium |
| Dynamic Programming | Hard |

---

### 6️⃣ Arbitrary Content Support

Supports learning from:

- GitHub repos
- Blogs
- PDFs
- YouTube
- Notes
- Documentation

This makes the system **content-agnostic**.

---

## 🏗️ Architecture

```
Input Content
     ↓
Concept Extraction
     ↓
Embedding Generation
     ↓
Similarity Detection
     ↓
Dependency Detection
     ↓
Graph Builder (DAG)
     ↓
Difficulty Scoring
     ↓
Path Generator
     ↓
Final Learning Order
```

---

## 🧠 Technologies Used

### Backend

- Node.js
- Express
- Python (NLP modules)

### AI / ML

- LLM APIs
- Sentence Transformers
- Embeddings
- Cosine Similarity

### Algorithms

- Graph Algorithms
- DAG Construction
- Cycle Detection
- Topological Sorting

---

## 📁 Project Structure

```
learning-path-engine/

│── backend/
│    ├── concept-extractor/
│    ├── similarity/
│    ├── graph-builder/
│    ├── path-generator/
│    └── difficulty-scorer/

│── data/

│── models/

│── utils/

│── server.js

│── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/learning-path-engine.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Server

```bash
npm start
```

---

## 🧪 Example Usage

### Input

```
React tutorial repository
```

### Output

```
1. HTML Basics
2. CSS Basics
3. JavaScript Basics
4. ES6
5. React Components
6. React Hooks
7. State Management
```

---

## 🔬 Algorithms Used

### Concept Graph Construction

- Semantic similarity edges
- Prerequisite inference
- Edge confidence scoring

### Learning Order Optimization

- Topological sorting
- Difficulty weighting
- Strategy optimization

---

## 🆚 Comparison with Existing Systems

| System Type | Handles Arbitrary Content | Uses AI | Dependency Graph |
|------------|-----------------------------|--------|------------------|
| MOOCs | ❌ | ❌ | ❌ |
| YouTube | ✅ | Partial | ❌ |
| Roadmaps | ❌ | ❌ | Manual |
| Adaptive Learning | ❌ | Partial | Prebuilt |
| **This System** | ✅ | ✅ | Auto-built |

---

## 📈 Future Work

- Explainability Engine
- UI Dashboard
- Real-time Graph Visualization
- Learning Progress Tracking
- Reinforcement Learning Optimization

---

## 🎯 Vision

Build a **universal learning engine** that can transform **any content into an optimal learning path automatically.**

---

## 👨‍💻 Author

**Rishabh Pandey Shreyansh Gupta**