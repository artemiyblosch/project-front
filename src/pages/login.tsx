import { Flex } from '@/components';
import { authCall } from '@/lib/auth';
import { removeLocal, setLocal } from '@/lib/localstorage';
import { traverse } from '@/lib/traverse';
import Form from 'next/form'
import React from 'react';

function auth(formData : FormData) {
    const name = formData.get("name")?.toString();
    const password = formData.get("password")?.toString();
    if(name == null || password == null) return;
    
    authCall({name,password})
    .then(() => {
        setLocal("User",{name,password});
        traverse('/');
    })
    .catch(() => alert("NO!"))
}

export default function LoginPage() {
    React.useEffect(()=>{
        removeLocal("User")
    },[]);

    return ( 
    <Flex direction='column'>
        <Form action={auth}>
            <input name="name" required/>
            <input name="password" type="password" required/>
            <button type="submit">Submit</button>
        </Form>
    </Flex> )
}