import React from "react";
import { useContext, useState } from "react";
import { LanguageProvider,  } from "../../contexts/LanguageContext"
import LanguageContext from "../../contexts/LanguageContext";
import Header from "../header/Header";
import  QuizForm  from "../form/Form";
import ResultScreen from "../results/Result";

const Index : any = () => {
  
const initialLanguage = 'en'
const { texts, handleLanguage } = useContext<any>(LanguageContext)
 
return (
 <div className="App-header">
<img className="slug" src="https://cdn0.iconfinder.com/data/icons/insects-glyph-2/64/214_insect-snail-slug-512.png" height="45" alt="slug" />  
  <Header />
  <QuizForm />
  <ResultScreen />
 </div> 
)
}

export default Index