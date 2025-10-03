import { Flex } from '@/components';
import { APICall, authCall } from '@/lib/calls';
import { removeLocal, setLocal } from '@/lib/localstorage';
import Form from 'next/form'
import React from 'react';
import styles from './login.module.scss'
import { APIQuery } from '@/lib/forms';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const auth = new APIQuery(
    ["tag","password"],
    authCall as APICall
)
.addResponseTo(200,(res) => {
    setLocal("User",res);
    redirect('/');
})
.addResponseTo(400, () => {
    alert("400");
})
.addResponseTo(403, () => {
    alert("403");
})
.callable();

export default function LoginPage() {
    React.useEffect(()=>{
        removeLocal("User")
    },[]);

    return ( 
    <div className={styles.container}>
        <h1>Login</h1>
        <Form action={auth}>   
            <Flex direction='column' gap="10px">
                <input name="tag" required/>
                <input name="password" type="password" required/>
                <button type="submit">Submit</button>
            </Flex>
        </Form>
        <Link href="/reg">No account? Register!</Link>
    </div>)
}