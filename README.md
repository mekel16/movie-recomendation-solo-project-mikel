# 🎬 PopChoice: Web-based Movie Recommendation System with Vector Embeddings

PopChoice is a simple yet powerful web-based movie recommendation system, designed as an introduction project to vector embeddings and semantic search for beginners. This project leverages Google Gemini API for generating vector embeddings and Supabase as the vector database backend.

## 🚀 Project Highlights

- **Modern Web Interface:** User-friendly, responsive web app for quick movie recommendations.
- **Semantic Search:** Uses Google Gemini API to transform user preferences and movie data into vector embeddings for smarter, more relevant recommendations.
- **Vector Database:** Employs Supabase with pgvector extension for efficient, scalable similarity search.
- **Customizable Dataset:** Works with a curated movie dataset containing titles, descriptions, ratings, and more.
- **Interactive Experience:** Users answer a few personalized questions, and the system recommends movies that best fit their mood and preferences.

---

## 🧩 How It Works

1. **User Input:** Users enter the number of participants, available time, and answer several questions about movie preferences.
2. **Embedding Generation:** The system uses Gemini API to convert both user input and movie data into vector representations.
3. **Similarity Search:** Supabase performs a nearest neighbor search in the vector space to find movies most similar to the user's preferences.
4. **Recommendation Display:** The top matching movies are displayed interactively on the web interface.

---

## 💻 Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla, SPA approach)
- **Embedding Model:** [Google Gemini API](https://ai.google.dev/)
- **Database:** [Supabase](https://supabase.com/) with [pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- **Backend:** Cloudflare Workers (for API orchestration)
- **Hosting:** Cloudflare Pages

---

## 📦 Dataset Example

The dataset is a simple CSV or JSON file, each entry containing:

- Title
- Description
- Rating
- (Optional) Genre, Year, etc.

Example:

```txt
Oppenheimer: 2023 | R | 3h | 8.6 rating
'Oppenheimer' is an epic biographical drama film about the story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. In World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to lead the top-secret Manhattan Project. Oppenheimer and his team of scientists spend years into developing and designing the atomic bomb. Their efforts culminated on July 16, 1945, when they witness the first nuclear explosion ever, which forever altered the course of history. Christopher Nolan directed Oppenheimer, and stars Cillian Murphy, Emily Blunt, Robert Downey Jr. and Matt Damon.

```

---

## 🛠️ Getting Started

1. **Clone this repo**
2. **Set up Supabase project** and enable pgvector extension.
3. **Obtain a Gemini API key** from Google AI Studio.
4. **Upload your movie dataset** and generate embeddings for each entry using Gemini API.
5. **Deploy the backend** (Cloudflare Workers) with the proper API keys and database URL.
6. **Configure the frontend** (index.html, etc.) to connect with your deployed API.

> **Note:** This project is meant for educational and experimental purposes. You can easily extend or adapt it for your own datasets or use cases!

---

## 🌟 Why Vector Embeddings?

Traditional keyword-based search often fails to capture the nuance of user intent. By using vector embeddings, PopChoice can recommend movies based on semantic similarity — finding movies that "feel" right, not just those that match keywords.

---

## 🙌 Credits

- [Gemini API](https://ai.google.dev/)
- [Supabase](https://supabase.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [pgvector](https://github.com/pgvector/pgvector)

---

## 📄 License

MIT License

---

**Happy watching! 🍿**
