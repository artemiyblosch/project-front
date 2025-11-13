import Form from 'next/form'
import styles from './login.module.scss'
import { Flex } from '@/components'
import { APICall, createUser } from '@/lib/calls'
import { APIQuery } from '@/lib/forms'
import { setLocal } from '@/lib/localstorage'
import Link from 'next/link' 
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter();
    const create = new APIQuery(
    ["name","password","tag"],
    createUser as APICall
)
    .addResponseTo(200, (r) => {
        setLocal("User",r);
        router.push("/")
    })
    .addResponseTo(400, () => alert("400"))
    .callable();


    return (
    <div className={styles.container}>
        <h1>Регистрация</h1>
        <Form action={create}>   
            <Flex direction='column' gap="10px">
                <input name="name" required/>
                <input name="password" type="password" required/>
                <input name="tag" required/>
                <button type="submit">Зарегистрироваться</button>
            </Flex>
        </Form>
        <Link href="/login">Есть аккаунт?</Link>
    </div>)
}