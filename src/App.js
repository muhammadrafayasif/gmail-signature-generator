import React, { useState } from 'react';
import Signature from './Signature';
import {Form, ImageForm} from './Form';
import './App.css';

export default function App() {
  const [nameValue, setNameValue] = useState('');
  const [headerValue, setHeaderValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [imageSrc, setImageSrc] = useState(null);

  const [linkedinValue, setLinkedInValue] = useState('');
  const [githubValue, setGitHubValue] = useState('');
  const [whatsappValue, setWhatsAppValue] = useState('');
  const [instagramValue, setInstagramValue] = useState('');

  return (<>
        <div className='page'>
            <div className='gmail-signature-generator'>
                    <Signature 
                        name={nameValue} 
                        header={headerValue} 
                        email={emailValue} 
                        phone={phoneValue} 
                        image={imageSrc}

                        linkedin={linkedinValue}
                        github={githubValue}
                        whatsapp={whatsappValue}
                        instagram={instagramValue}
                    />
                <br />
                <Form
                    value={nameValue}
                    type="name"
                    onChange={(e) => setNameValue(e.target.value)}
                />
                <Form
                    value={headerValue}
                    type="header"
                    onChange={(e) => setHeaderValue(e.target.value)}
                />
                <Form
                    value={phoneValue}
                    type="phone"
                    onChange={(e) => setPhoneValue(e.target.value)}
                />
                <Form
                    value={emailValue}
                    type="email"
                    onChange={(e) => setEmailValue(e.target.value)}
                />
                <ImageForm 
                    onImageChange={setImageSrc}
                />
                <br/><br/>
                <Form
                    value={linkedinValue}
                    type="LinkedIn"
                    onChange={(e) => setLinkedInValue(e.target.value)}
                />
                <Form
                    value={githubValue}
                    type="GitHub"
                    onChange={(e) => setGitHubValue(e.target.value)}
                />
                <Form
                    value={whatsappValue}
                    type="WhatsApp"
                    onChange={(e) => setWhatsAppValue(e.target.value)}
                />
                <Form
                    value={instagramValue}
                    type="Instagram"
                    onChange={(e) => setInstagramValue(e.target.value)}
                />
            </div>
        </div>
    </>
  );
}
