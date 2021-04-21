import React, { useContext } from 'react';

import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/Language';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = e => userLanguageChange(e.target.value);

  return (
      <div>

          <select className={ userLanguage === 'en' ? 'LanguageSelectorSelect' : 'LanguageSelectorSelectHeb' }
                  onChange={handleLanguageChange}
                  value={userLanguage}>

      {Object.entries(languageOptions).map(([id, name]) => (   
        <option className="LanguageSelectorOption" key={id} value={id}>{name}</option>
      ))}

    </select>
      </div>
    
  );
};