from flask import Flask, request

app = Flask(__name__)

from model import *

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
    i = int(request.form['component'])
    student_responses= request.form['response']
    return feedback_raft_chain(llm, topic, i, student_responses)

@app.post("/essay_feedback")
def essay_feedback():
    grade = request.form['grade']
    writing_topic = request.form['writing_topic']
    essay = request.form['essay']
    return eval_chain(llm, grade, writing_topic, essay, verbose=True)

@app.route("/")
def hello():
    return "Hello, World!"

if __name__ == '__main__':
    app.run()