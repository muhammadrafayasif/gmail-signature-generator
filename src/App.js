import React, { useState } from 'react';
import Signature from './Signature';
import {Form, ImageForm} from './Form';

export default function App() {
  const [nameValue, setNameValue] = useState('');
  const [headerValue, setHeaderValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [imageSrc, setImageSrc] = useState(null);

  return (<>
        <div>
        <Signature name={nameValue} header={headerValue} email={emailValue} phone={phoneValue} image={imageSrc} />
        </div>
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
            value={emailValue}
            type="email"
            onChange={(e) => setEmailValue(e.target.value)}
        />
        <Form
            value={phoneValue}
            type="phone"
            onChange={(e) => setPhoneValue(e.target.value)}
        />
        <ImageForm 
            onImageChange={setImageSrc}
        />
    </>
  );
}
