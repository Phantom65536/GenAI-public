## What our project is
The core of our project integrates Google's Gemini GenAI with **proven research methods**, **TIDE** and **RAFT** (which follows the SRSD framework as discussed in this [paper](https://journals.sagepub.com/doi/full/10.1111/ldrp.12140)) to assist with organizing thoughts and structuring arguments, overcoming the difficult challenges of writing. 

Teachers can assign essay prompts and select the learning method to be used. Students then complete these assignments with the aid of visual guides and feedback provided by both software and Gemini.

**Concern: Will students rely too heavily on Gemini for answers, bypassing the learning process?**
To address this, **ScribAid** is designed so Gemini AI only offers feedback on essay ideas, not the essays themselves, preventing any potential misuse and ensuring the tool enhances the learning experience.

## How to set it up
- Backend:
  - Download neccesary python packages using `pip install -r requirement.txt`
  - Start the server by running `flask --app server run`
- Frontend:
  - go to frontend folder by `cd frontend`
  - Download neccesary javascript packages using `npm install`
  - Start the web server by running `npm start`


## Structure of program
Backend:
- model.py includes all functions used to communicate with the generative AI models
- server.py includes all functions run on the flask server
- server-test.py includes all backend testing

Frontend:

- App.js entry point of the web server
- Sections for diifferent component
