from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
from model import *

app = Flask(__name__)
CORS(app)

load_dotenv(".env")
fetched_api_key = os.getenv("IMG_API_KEY")

llm = init()

@app.post("/suggestion")
def suggestion():
    student_profile = request.form['student_profile']
    topic = request.form['topic']
    return suggestion_chain(llm, topic, student_profile, verbose=True)

@app.post("/topic_pics")
def topic_pics():
    topic = request.form['topic']
    num = request.form['num_pics']
    name = request.form['name']
    for i in range(num):
        topic_picgen_chain(llm, topic, f"{name}_{i}")

@app.post("/table")
def table():
    topic = request.form['topic']
    return table_chain(llm, topic, verbose=True)

@app.post("/table_raft")
def table_raft():
    topic = request.form['topic']
    return table_raft_chain(llm, topic, verbose=True)

@app.post("/table_feedback")
def table_feedback():
    topic = request.form['topic']
    i = int(request.form['component'])
    student_responses= request.form['response']
    return feedback_chain(llm, topic, i, student_responses)

@app.post("/table_feedback_raft")
def table_feedback_raft():
    topic = request.form['topic']
    student_responses= request.form['response']
    return feedback_raft_chain(llm, topic, student_responses)

@app.post("/essay_feedback")
def essay_feedback():
    grade = request.form['grade']
    writing_topic = request.form['writing_topic']
    essay = request.form['essay']
    return eval_chain(llm, grade, writing_topic, essay, verbose=True)

@app.post("/generate_image")
def generate_image():
    prompt = """
    Global warming has become a serious threat to our planet. Explain what we can do as citizens to reduce the effect of global warming. You may want to consider factors, such as 
    - recycling
    - the impact of fossil fuels (oil, gas and coal)
    - the impact of consumerism (buying things)
    Generate some funny and inspiring images about this topic.
    """

    response = requests.post(
        f"https://api.stability.ai/v2beta/stable-image/generate/core",
        headers={
            "authorization": fetched_api_key,
            "accept": "application/json"
        },
        files={
            "none": ''
        },
        data={
            "prompt": prompt,
            "output_format": "png",
        },
    )
    return response.json()

@app.route("/")
def hello():
    return "Hello, World!"

if __name__ == '__main__':
    app.run()