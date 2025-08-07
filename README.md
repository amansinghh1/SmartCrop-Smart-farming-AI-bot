# 🌿 SmartCrop — Smart Farming AI Assistant

**Empowering Farmers with AI to Detect Plant Diseases and Optimize Crop Yields**

SmartCrop is an AI-powered web application that helps farmers instantly detect plant diseases by uploading leaf images. It then provides recommendations, disease harmfulness levels, confidence scores, crop guides, and fertilizer suggestions. It is designed to be accessible, fast, and helpful for small and medium-scale farmers.

---

## 📦 Project Folder Structure

```
SmartFarmingBot/
│
├── app.py                         # Main Flask application
├── requirements.txt              # Python dependencies
│
├── model/                        # Model files and dataset
│   ├── final_model.h5            # Trained model for prediction
│   ├── model.h5                  # Another version of model
│   └── Plant Village Dataset/    # Original dataset (not tracked in Git)
│
├── static/                       # Static assets
│   ├── style.css                 # General styling
│   ├── style2.css                # Page-specific styling (like about page)
│   ├── upload-icon.png           # Image used in upload button
│   ├── uploads/                  # Uploaded images (used temporarily)
│   └── cropGuide.js              # JS for displaying crop-wise guides
│
├── templates/                    # HTML templates rendered via Flask
│   ├── index.html                # Landing page
│   ├── analyze.html              # Result page after prediction
│   ├── about.html                # About project page
│   ├── guide.html                # Crop guide section
│   └── weather.html              # Weather page for crop-based suggestions
│
├── final_model1.h5              # Another trained model for classification
├── plant_disease_descriptions.json  # JSON mapping of disease labels to info
```

---

## 🚀 Features

- 📷 **Image-Based Detection** — Upload a plant leaf image to get an instant diagnosis.
- 📊 **Confidence Score** — Displays how confident the AI is in its prediction.
- ❗ **Harmfulness Level** — Tells whether the disease is mildly harmful or dangerous.
- 💊 **Disease Treatment** — Shows simple and effective recovery solutions.
- 🧾 **PDF Report Generation** — Save the prediction and info as a downloadable report.
- 🌿 **Crop Growing Guide** — Offers ideal conditions and practices for 20+ crops.
- 🧪 **Smart Fertilizer Advisor** — Recommends fertilizer based on crop and soil.
- ☁️ **Weather Insights** — Suggests actions based on weather forecasts.

---

## 🧠 How It Works

1. User uploads a plant leaf image.
2. The backend uses a trained deep learning model to classify the disease.
3. The app shows:
   - Disease Name
   - Confidence %
   - Harmfulness level
   - Description + Treatment tips
4. The user can view crop guides or get fertilizer advice.
5. Optionally, a PDF report can be downloaded.

---

## 🖥️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Python, Flask
- **Model**: Keras/TensorFlow (.h5)
- **APIs**: OpenWeatherMap, SoilGrids (optional)
- **Deployment**: Localhost (can be extended to cloud)

---

## 📦 Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/amansinghh1/SmartCrop.git
cd SmartCrop
```

2. **Create a Virtual Environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install Required Packages**
```bash
pip install -r requirements.txt
```

4. **Run the Flask App**
```bash
python app.py
```

5. **Visit the Web App**
Open your browser and go to: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 📝 Requirements File (`requirements.txt`)

Ensure your `requirements.txt` includes:
```
flask
numpy
pillow
tensorflow
matplotlib
```

---

## 👨‍💻 Author

**Aman Singh**  
Final Year Engineering Student | AI Enthusiast | Tech Innovator

> 💼 LinkedIn: [https://www.linkedin.com/in/aman-singh-580205295/]

---

## 📄 License

This project is licensed under the MIT License. You are free to use, distribute, and modify it with attribution.

---

## 🙏 Acknowledgements

- PlantVillage Dataset from Kaggle
- TensorFlow & Keras
- OpenWeatherMap API
- SoilGrids API
