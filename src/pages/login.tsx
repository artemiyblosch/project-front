import { Flex } from '@/components';
import { APICall, authCall } from '@/lib/calls';
import { removeLocal, setLocal } from '@/lib/localstorage';
import Form from 'next/form'
import React from 'react';
import styles from './login.module.scss'
import { APIQuery } from '@/lib/forms';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const auth = new APIQuery(
    ["tag","password"],
    authCall as APICall
)
    .addResponseTo(200,(res) => {
        setLocal("User",res);
        router.push('/');
    })
    .addResponseTo(400, () => {
        alert("400");
    })
    .addResponseTo(403, () => {
        alert("403");
    })
    .callable();


    React.useEffect(()=>{
        removeLocal("User")
    },[]);

    return (
    <Flex className={styles.centroid} justifyContent='center' align='center'>
    <div className={styles.container}>
      <h1>Вход в аккаунт</h1>
      <Form id="loginForm" action={auth}>
        <Flex direction='column' gap="20px">
            <label>Логин</label>
            <input
            type="text"
            id="username"
            name="tag"
            placeholder="Введите логин"
            required
            />

            <label>Пароль</label>
            <input
            type="password"
            id="password"
            name="password"
            placeholder="Введите пароль"
            required
            />

            <button type="submit" className={styles.loginBtn}>Войти</button>
        </Flex>
      </Form>
    </div>
    </Flex>)
}