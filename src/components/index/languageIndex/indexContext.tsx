import React from "react";
import { useState } from "react";
import { LanguageProvider } from "../../contexts/LanguageContext";
import Index from "../main/main";
import './index.css';


export const LanguageIndex = () => {

return ( 
<LanguageProvider>
 <Index />
</LanguageProvider> 
)};