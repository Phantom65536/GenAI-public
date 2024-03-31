# %%
from dotenv import load_dotenv
import os
from langchain_google_genai import GoogleGenerativeAI, ChatGoogleGenerativeAI, HarmBlockThreshold, HarmCategory
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain, ConversationChain
from pathlib import Path
from langchain.globals import set_debug
import requests

# %% [markdown]
# setup LLM

# %%
def init(debug=False):
    set_debug(debug)
    load_dotenv(".env")
    fetched_api_key = os.getenv("API_KEY")
    safety_settings = {
        HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT: HarmBlockThreshold.BLOCK_NONE, 
        HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_NONE, 
        HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_NONE, 
        HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT: HarmBlockThreshold.BLOCK_NONE,
    }
    llm = ChatGoogleGenerativeAI(
        model="gemini-pro", 
        safety_settings = safety_settings,
        google_api_key=fetched_api_key,
        temperature=0,
    )
    return llm 

# %%
# llm = init()

# %% [markdown]
# Give suggestions

# %%
def suggestion_chain(llm, topic, student_profile, verbose=False):
    suggestion_prompt_template = """
    You are a teaching assistant. 
    The teacher is going to implement a SRSD stretegy for students.
    --------------------------------------------------------------
    The student profile is as follows:
    {student_profile}
    --------------------------------------------------------------
    The topic is as follows:
    {topic}
    --------------------------------------------------------------
    You have following two options available:
    - RAFT (Role, Audience, Format, Topic)
    - TIDE (Topic, Important Details, Detailed Examination, Ending)
    --------------------------------------------------------------
    How would you use both of them and why?
    """
    suggestion_prompt = PromptTemplate.from_template(suggestion_prompt_template)
    suggestion_chain = LLMChain(llm=llm, prompt=suggestion_prompt, verbose=verbose)
    suggestion = suggestion_chain.run(student_profile=student_profile,topic=topic)
    dictionary = {
        "suggestion": suggestion
    }
    return dictionary

# %%
# student_profile = "grade 8 students with learning disabilities"
# topic = "Write an essay about Canada" #"Describe a time with your family this year. You will need around 200 words in 4 paragraphs"
# suggestion_dict = suggestion_chain(llm, topic, student_profile)
# display(Markdown(suggestion_dict["suggestion"]))

# %% [markdown]
# Create Teaching Plan

def topic_picgen_chain(topic, filename):
    fetched_api_key = os.getenv("IMG_API_KEY")
    topic_picgen_prompt_template = f"""
    {topic}
    Generate some funny and inspiring images about this topic.
    """
    response = requests.post(
        f"https://api.stability.ai/v2beta/stable-image/generate/core",
        headers={
            "authorization": fetched_api_key,
            "accept": "image/*"
        },
        files={
            "none": ''
        },
        data={
            "prompt": topic_picgen_prompt_template,
            "output_format": "png",
        },
    )

    if response.status_code == 200:
        with open(f"./{filename}.png", 'wb') as file:
            file.write(response.content)
    else:
        raise Exception(str(response.json()))
# %%
TIDE_organizer = [
    "Topic introduction with Thesis",
    "Important Details",
    "Detailed Examination",
    "Ending"
]

# %%
def table_chain(llm, topic, verbose=False):
    table_prompt_template = """
    You are a teaching assistant. 
    The teacher is going to make a Graphic Organizer for TIDE (Topic, Important Details, Detailed Examination, Ending).
    --------------------------------------------------------------
    The topic is as follows:
    {topic}
    --------------------------------------------------------------
    The organizer consists of the following components:
    {organizer}
    --------------------------------------------------------------
    Please add guidience with one sentence for the component "{component}" according to the topic.
    """
    table_prompt = PromptTemplate.from_template(table_prompt_template)
    table_chain = LLMChain(llm=llm, prompt=table_prompt, verbose=verbose)
    organizer = "\n".join(TIDE_organizer)
    title = ["T", "I", "D", "E"]
    elab_dict = {}
    for i, component in enumerate(TIDE_organizer):
        elab_dict[title[i]] = table_chain.run(topic=topic, organizer=organizer, component=component)
    return elab_dict

# %%
RAFT_organizer = [
    "Role",
    "Audience",
    "Format",
]

def table_raft_chain(llm, topic, verbose=False):
    table_prompt_template = """
    You are a teaching assistant. 
    The teacher is going to make a Graphic Organizer for RAFT (Role, Audience, Format, Topic)
    --------------------------------------------------------------
    The topic is as follows:
    {topic}
    --------------------------------------------------------------
    The organizer consists of the following components:
    {organizer}
    --------------------------------------------------------------
    Explain what the students fill in with one question for each component. The target audience are students, so do not give the answer directly.
    """
    table_prompt = PromptTemplate.from_template(table_prompt_template)
    table_chain = LLMChain(llm=llm, prompt=table_prompt, verbose=verbose)
    organizer = "\n".join(RAFT_organizer)
    elab_dict = {}
    elab_dict["RAFT"] = table_chain.run(topic=topic, organizer=organizer)
    return elab_dict

# %%
# elab_dict = table_chain(llm, topic, verbose=True)
# for key in elab_dict:
#     display(Markdown(elab_dict[key]))

# %% [markdown]
# ## Feedback to students on TIDE questions they answered
# - Accurate and concise
# - In point form with boldfacing to catch student's attention

# %%
# FRONTEND
student_responses = ["""An Introduction to Canada""",

"""
Important details:
- Many landscape: Mountains, trees, forests, seas, rivers.
- Many culture: People from all over the world live in Canada.
- Developed economy: Mainly financial and technolocal industries.

Detailed examination:
- Many landscapes: Natural country parks, most land in canada are forest.
- Many cultures: Having many people is good because we can learn from each other. But having too many people may cause conficts.
- Developed economy: New industries include Artifical Intellienge and fintech. However, people may lose jobs because computers replace them.
""",

"""In conclusion, Canada is a great country and I like it. """]

# %% [markdown]
# Concatenate student response for Important details and Detailed examination

# %%
TIDE_components = [
    "Topic introduction with Thesis",
    "Important Details and Detailed Examination",
    "Ending"
]

# %%
def feedback_chain(llm, topic, component, student_response, verbose=False):
    general_feedback_prompt = """
    You are a teaching assistant. Your student is doing a Graphic Organizer for TIDE (Topic, Important Details, Detailed Examination, Ending).
    --------------------------------------------------------------
    The topic is as follows:
    {topic}
    --------------------------------------------------------------
    The student has written the following for the component {component}:
    {response}
    --------------------------------------------------------------
    Please provide feedback on the response. Remember to be concise and clear, but give concrete suggestions according to the student's response. 
    Write in point form. 
    Feedbacks are meant to be encouraging. Remember you are talking to the student.
    Please give your feedback in two sessions: Stremgths and Areas for Improvement. Give suggestions but do not rewrite the response.
    """
    table_prompt = PromptTemplate.from_template(general_feedback_prompt)
    table_chain = LLMChain(llm=llm, prompt=table_prompt, verbose=verbose)
    feedback = table_chain.run(topic=topic, component=TIDE_components[component], response=student_response)
    feedback_dict = {
        "feedback": feedback
    }
    return feedback_dict

RAFT_components = [
    "Role",
    "Audience",
    "Format",
]

# %%
def feedback_raft_chain(llm, topic, component, student_response, verbose=False):
    general_feedback_prompt = """
    You are a teaching assistant. Your student is doing a Graphic Organizer for RAFT (Role, Audience, Format, Topic).
    --------------------------------------------------------------
    The topic is as follows:
    {topic}
    --------------------------------------------------------------
    The student has written the following for the component {component}:
    {response}
    --------------------------------------------------------------
    Please provide feedback on the response. Remember to be concise and clear, but give concrete suggestions according to the student's response. 
    Write in point form. 
    Feedbacks are meant to be encouraging. Remember you are talking to the student.
    Please give your feedback in two sessions: Stremgths and Areas for Improvement. Give suggestions but do not rewrite the response.
    """
    table_prompt = PromptTemplate.from_template(general_feedback_prompt)
    table_chain = LLMChain(llm=llm, prompt=table_prompt, verbose=verbose)
    feedback = table_chain.run(topic=topic, component=RAFT_components[component], response=student_response)
    feedback_dict = {
        "feedback": feedback
    }
    return feedback_dict

# %%
# for i in range(len(student_responses)):
#     feedback_dict = feedback_chain(llm, i, student_responses[i])
#     display(f"{i}:")
#     display(Markdown(feedback_dict["feedback"]))

# %% [markdown]
# ## Evalution criteria:
# - Content
# - Language
# - Organization

# %%
eval_crit = """

Give a mark between 0 to 5 for each of content, language, organization; and give detailed explanation with examples:

1. Content 
    - How extensive is the content?
    - How well does the content cover the topic?
    - How well are the ideas developed?
    - Is creativity and originality evident?
    - Is the writing engaging and interesting?
2. Language
    - Are accurate sentence structures used, including more complex ones?
    - Is the vocabulary varied and appropriate?
    - Is grammar and punctuation used correctly?
    - Is the writing free of spelling errors?
    - Is the tone and style appropriate for the audience?
3. Organization
    - Is the text organized effectively, with logical development of ideas?
    - Are paragraphs well-structured and coherent?
    - Are points supported with relevant details?
    - Are transitions used effectively to connect ideas?

"""

# %%
def eval_chain(llm, grade, writing_topic, essay, verbose=False):
    prompt_template = f"""
    You are a teaching assistant and the students have learning disorder. A student in grade {grade} have submitted the following piece of writing given a topic.
    --------------------------------------------
    Topic given by the teacher:
    {writing_topic}
    --------------------------------------------
    Student's writing:
    {essay}
    --------------------------------------------
    Please assess the writing with the following criteria:
    {eval_crit}
    """
    ai_msg = llm.invoke(prompt_template)
    feedback_dict = {
        "feedback": ai_msg.content
    }
    return feedback_dict

# %%
# grade = 8
# writing_topic = """
# Global warming has become a serious threat to our planet. Explain what we can do as citizens to reduce the effects of global warming.
# """
# essay = """
# As we all know Global warming has become a major threat to our Planet Earth. It is our duty to look towards it and act. The main reason responsible, is pollution. To reduce global warming \
# we should recycle and reuse! We should not accept plastic bags when we go for shopping. Instead we should ask for paper or cloth bags. We should avoid using motorvechical if we can walk on foot or we can use bycycle. \
# We should not throw plastic waste on ground but put it in the bin. We should not smoke because it cause pollution. We should be careful in using water \
# and fossil fuels such as oil, gas, coal, etc. So these are some measures that are to be taken to control global warming and make our mother earth healthy once again.
# """
# feedback_dict = eval_chain(llm, grade, topic, essay)
# display(Markdown(feedback_dict["feedback"]))

# %% [markdown]
# Draft

# # %%
# prompt_template = """
# The original JSON object is: 
# {original_json}
# --------------------------------------------------------------
# Please modify it according to the following topic: 
# {topic}
# --------------------------------------------------------------
# The resulting JSON object should be:
# """
# prompt = PromptTemplate.from_template(prompt_template)
# chain = LLMChain(llm=llm, prompt=prompt, verbose=True)

# # %%
# file_path='table.json'
# table_template = json.loads(Path(file_path).read_text())
# table_template['TIDE']

# # %%
# original_json = table_template['TIDE']
# table = chain.run(original_json=original_json,topic=topic)

# # %%
# table

# # %%
# modified_json = parser.parse(table)
# display(table)


