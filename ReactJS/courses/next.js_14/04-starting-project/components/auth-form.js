import { auth } from '@/actions/auth.actions';
import Link from 'next/link';

export default function AuthForm({ mode }) {
    return (
        <form id="auth-form" action={auth.bind(null, mode)}>
            <div>
                <img src="/images/auth-icon.jpg" alt="A lock icon" />
            </div>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </p>
            <p>
                <button type="submit">
                {mode === 'login' ? 'Login' : 'Create account'}
                </button>
            </p>
            <p>
                {mode === 'login' && <Link href="/?mode=signup">Create an account.</Link>}
                {mode === 'signup' && <Link href="/?mode=login">Login with existing account.</Link>}
            </p>
        </form>
    );
}
