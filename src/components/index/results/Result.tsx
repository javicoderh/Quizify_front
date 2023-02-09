import React from "react";
import { useContext, useState } from "react";
import { LanguageProvider,  } from "../../contexts/LanguageContext"
import LanguageContext from "../../contexts/LanguageContext";
import './results.css';

const ResultScreen : any = () => {
 const initialLanguage = 'en'
 const { texts, handleLanguage } = useContext<any>(LanguageContext)

return (

<div className="resultScreen">
  <div className="resultScreenContent">
   <img src="https://scontent.fscl11-2.fna.fbcdn.net/v/t39.30808-6/326274439_741676943722414_1277584229060021232_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=NV8VahXQnE0AX9F-WD9&tn=Gt7aswZVcFH4kO-i&_nc_ht=scontent.fscl11-2.fna&oh=00_AfC_aAoUvu6PPpce_j3LIQLOP0csCFAZFuGNA_dYIhP7Ag&oe=63CD5F5A" height="100" alt="" />
   <h3 className="screenText">{texts.screenText}</h3>
  </div>
 </div>
)}

export default ResultScreen