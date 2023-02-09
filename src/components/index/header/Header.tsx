import React from "react";
import { useContext, useState, useEffect } from "react";
import { LanguageProvider,  } from "../../contexts/LanguageContext"
import LanguageContext from "../../contexts/LanguageContext";
import './header.css';
import EN from "../../../assets/EN.png"
import ES from "../../../assets/ES.png"
import { translations } from "../../contexts/translations";

const Header : any = () => {
const initialLanguage = 'en'
const { texts, handleLanguage, flag } = useContext<any>(LanguageContext)

return (
 <header>  
  <div className="redSquare"></div>
  <div className="greenSquare"></div>
  <div className="blueSquare"></div>
  <div className="yellowSquare"></div>
  <h2 className="tools">QuizTools</h2>
  <nav>
   <h3>{texts.headerProduct}</h3>
   <h3>{texts.headerPricing}</h3>
   <h3>{texts.headerQuiz}</h3>
   <h3>Blog</h3>         
  </nav>
  <div className="LangFlag">
  <h3 className="headerLang">{texts.pageLanguage}</h3>
  <button
   className="flagButton" 
   onClick={handleLanguage} ><img className="flag" src={flag} width="35" height="20" alt="" /></button>
  </div>
  <button className="createQuizz">{texts.headerButton}</button>
 </header>
)}

export default Header