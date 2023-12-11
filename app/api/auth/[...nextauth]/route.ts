// import { authenticate } from "@/services/authService"
import NextAuth, { NextAuthOptions } from 'next-auth'
import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { users } from '@/data/users/constants'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.email || !credentials.password)
                    return null
                const user = users.find(
                    (item) => item.email === credentials.email
                )
                if (user?.password === credentials.password) {
                    return user
                }
                return null
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    // session: { strategy: 'jwt' },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
