import React from "react";
import { useContext, useState } from "react";
import { LanguageProvider,  } from "../../contexts/LanguageContext"
import LanguageContext from "../../contexts/LanguageContext";
import './form.css';
import axios from 'axios'

const QuizForm = () => {
const initialLanguage = 'en'
const { texts, handleLanguage } = useContext<any>(LanguageContext)
const [ topic, setTopic ] = useState('')
const [ qNumber, setQNumber ] = useState('')
const [ qLanguage, setQLanguage ] = useState('')
const [ choices, setChoices ] = useState('')
const [ difficulty, setDifficulty ] = useState('')
const [ comments, setComments] = useState('')
const [ error, setError] = useState(false)

function submit(e: any){
if(topic === ''){
setError(true)
alert(texts.errorMessage)
}
if(qNumber === ''){
  setError(true)
}
if(qLanguage === ''){
  setError(true)
}
if(choices === ''){
  setError(true)
}
if(difficulty === ''){
  setError(true)
}
if(comments === ''){
  setError(true)
}
else {    
  axios({
    method: 'post',
    url: 'https://quizgpt-api-upy5mhs63a-rj.a.run.app/',
    data: {
      topic: topic,
      language: qLanguage,
      questions: qNumber,
      alternatives: choices,
      difficulty: difficulty,
      showAnswers: comments
    }
  });
}
}
return (
<div className="quizForm">
  <h2>{texts.quizFormTittle}</h2>
  <p>
   {texts.quizFormP}
  </p>
  <div className="inputs">  
   <label htmlFor="topic">{texts.quizTopic}</label>
   <input
    name="topic" 
    type="text" 
    className="topic" 
    placeholder={texts.quizTopicPlaceholder} 
    onChange={ev => {
      setTopic(ev.target.value)
    }}
    />
   <div className="inputNest">
    <div className="inputInnerNest">
    <label htmlFor="questionsNumber">{texts.questionsNumber}</label>
    <input
      className="qNumber" 
      name="questionsNumber" 
      type="text" 
      placeholder="5"
      onChange={ev => {
      setQNumber(ev.target.value)
      }} 
      />
    </div>
    <div className="inputInnerNest2">
    <label className="spLabel" htmlFor="language">{texts.questionsLanguage}</label>
      <select
      id="languageSelect"
      className="lang" 
      name="language"
      defaultValue="Spanish"
      onChange={ev => {
      setQLanguage(ev.target.value)
      }}
      >
      <option value="es">Spanish</option>
      <option value="en">English</option>
     </select>
    </div>
   </div>
   <label htmlFor="choices">{texts.choicesNumber}</label>
    <input
    name="choices"
    id=""
    className="long"
    placeholder="1"
    onChange={ev => {
    setChoices(ev.target.value)
    }}
    ></input>
   <div className="inputNest">
   <div className="inputInnerNest3 marginRight">
    <label className="spLabel" htmlFor="difficulty">{texts.difficulty}</label>
    <select
    className="lang"
    name="difficulty"
    id=""
    onChange={ev => {
    setDifficulty(ev.target.value)
    }}
    >
     <option value="elementary">elementary school</option>
     <option value="highschool">{texts.difficultyPlaceholder}</option>
    </select>
    </div>
    <div className="inputInnerNest3">
     <label className="spLabel" htmlFor="comments">{texts.answerComments}</label>
     <select
      className="lang"
      name="comments"
      id=""
      onChange={ev => {
      setComments(ev.target.value)
      }}
      >      
      <option value="true">{texts.answerCommentsPlaceholder}</option>
      <option value="false">{texts.answerCommentsPlaceholder2}</option>
     </select>
    </div>
   </div>  
   <button onClick={submit} type="submit" className="submit">{texts.formButton}</button>   
  </div>
</div>
)}

export default QuizForm