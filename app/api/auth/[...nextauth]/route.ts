// import { authenticate } from "@/services/authService"
import NextAuth, { NextAuthOptions } from 'next-auth'
import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { users } from '@/data/users/constants'
// import getUsers from '@/app/services/usersApi'
import { useUsers } from '@/app/components/ui/auth/useUsers'

// const { data: users, isLoading, error, refetch } = useUsers()
async function getUsers() {
    const response = await fetch('https://estate-api-0bne.onrender.com/users')
    const data = await response.json()
    return data
}
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                try {
                    const users = await getUsers()
                    const user = users.find(
                        (item) => item.email === credentials?.email
                    )

                    if (user?.password === credentials?.password) {
                        return user
                    } else if (!user) {
                        throw new Error('User not found')
                    }
                    return null
                } catch (error) {
                    throw new Error('Error fetching users')
                }
            },
        }),
    ],
    // pages: {
    //     signIn: '/auth/signin',
    // },
    // session: { strategy: 'jwt' },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
