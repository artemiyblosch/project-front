import { Flex } from '@/components';
import { authCall } from '@/lib/auth';
import { removeLocal, setLocal } from '@/lib/localstorage';
import { traverse } from '@/lib/traverse';
import Form from 'next/form'
import React from 'react';
import styles from './login.module.scss'

function auth(formData : FormData) {
    const name = formData.get("name")?.toString();
    const password = formData.get("password")?.toString();
    if(name == null || password == null) return;
    
    authCall({name,password})
    .then((response) => {
        response.text().then((r)=>{
            setLocal("User",r);
            traverse('/');
        })
    })
    .catch(() => alert("NO!"))
}

export default function LoginPage() {
    React.useEffect(()=>{
        removeLocal("User")
    },[]);

    return ( 
    <div className={styles.container}>
        <h1>Login</h1>
        <Form action={auth}>   
            <Flex direction='column' gap="10px">
                <input name="name" required/>
                <input name="password" type="password" required/>
                <input name="csrfmiddlewaretoken" type="hidden"/>
                <button type="submit">Submit</button>
            </Flex>
        </Form>
    </div>)
}