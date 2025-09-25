import Form from 'next/form'
import styles from './login.module.scss'
import { Flex } from '@/components'
import { APICall, createUser } from '@/lib/calls'
import { APICallFromForm } from '@/lib/forms'
import { setLocal } from '@/lib/localstorage'
import { traverse } from '@/lib/traverse'
import Link from 'next/link' 

const create = new APICallFromForm(
    ["name","password","tag"],
    createUser as APICall
)
.addResponseTo(200, (r) => {
    setLocal("User",r);
    traverse("/")
})
.addResponseTo(400, () => alert("400"))
.callable();

export default function Page() {
    return (
    <div className={styles.container}>
        <h1>Registration</h1>
        <Form action={create}>   
            <Flex direction='column' gap="10px">
                <input name="name" required/>
                <input name="password" type="password" required/>
                <input name="tag" required/>
                <button type="submit">Submit</button>
            </Flex>
        </Form>
        <Link href="/login">Have an account? Log in!</Link>
    </div>)
}