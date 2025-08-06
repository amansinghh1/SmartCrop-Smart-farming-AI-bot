from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import json

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'

# Load model
model_path = 'model/final_model.h5'
model = load_model(model_path)

# Load disease descriptions from JSON
with open('plant_disease_descriptions.json', 'r') as file:
    disease_data = json.load(file)

# 16 Class Labels (same as Colab)
class_labels = [
    'Septoria Leaf Spot', 'Leaf Scorch', 'Healthy', 'Early Blight', 'Leaf Blight',
    'Northern Leaf Blight', 'Yellow Leaf Curl Virus', 'Bacterial Spot',
    'Common Rust ', 'Black Rot', 'Cercospora Leaf Spot', 'Esca (Black Measles)',
    'Late Blight', 'Apple Scab', 'Powdery Mildew', 'Cedar Apple Rust'
]

# Prediction logic
def predict_disease(img_path):
    img = image.load_img(img_path, target_size=(128, 128))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    preds = model.predict(img_array)[0]
    pred_index = np.argmax(preds)
    confidence = round(float(np.max(preds)) * 100, 2)

    predicted_class = class_labels[pred_index].strip()
    class_key = predicted_class.lower().replace(" ", "_")

    disease = disease_data.get(class_key, {
        'diseaseName': predicted_class,
        'description': 'No description available.',
        'harmfulness': 'unknown',
        'recommendations': []
    })

    return predicted_class, confidence, disease

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['GET', 'POST'])
def analyze():
    if request.method == 'POST':
        file = request.files.get('file')
        if not file or file.filename == '':
            return "No file selected"

        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        prediction, confidence, disease = predict_disease(filepath)

        return render_template(
            'analyze.html',
            prediction=prediction,
            confidence=confidence,
            description=disease['description'],
            harmful=disease['harmfulness'],
            recommendations=disease['recommendations'],
            image_path=filepath
        )

    return render_template('analyze.html')

@app.route('/guide')
def guide():
    return render_template('guide.html')

@app.route('/weather')
def weather():
    return render_template('weather.html')

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == '__main__':
    app.run(debug=True)
